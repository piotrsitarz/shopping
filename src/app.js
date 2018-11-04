import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './components/registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter, { history } from './routers/AppRouter';
import database, { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth';
import { getUser, removeUser } from './actions/user';
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    database.ref(`users/${user.uid}`).once('value').then((snapshot) => {
      const userInformation = {
        name:snapshot.val().name,
        surname:snapshot.val().surname,
        email:snapshot.val().email,
        address:snapshot.val().address,
        phone:snapshot.val().phone
      }
      store.dispatch(getUser(userInformation));
    });
    if (history.location.pathname === '/login' || history.location.pathname === '/register' ) {
      history.push('/order');
    }
  } else {
    store.dispatch(logout());
    store.dispatch(removeUser());
  }
});

ReactDOM.render(jsx, document.getElementById('app'));
registerServiceWorker();
