import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from '../reducers/products';
import authReducer from '../reducers/auth';
import basketReducer from '../reducers/basket';
import userReducer from '../reducers/user';

export default () => {
  const store = createStore(
    combineReducers({
      products: productsReducer,
      auth: authReducer,
      basket: basketReducer,
      user: userReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );

  return store;
};
