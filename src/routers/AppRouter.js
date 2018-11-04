import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import PrivateRoute from './PrivateRoute';
import ProductsPage from '../components/ProductsPage';
import RegistrationForm from '../components/RegistrationForm';
import LoginForm from '../components/LoginForm';
import OrderPage from '../components/OrderPage';
import DeliveryPage from '../components/DeliveryPage';
import PaymentPage from '../components/PaymentPage';
import SummaryPage from '../components/SummaryPage';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ProductsPage} exact={true} />
        <Route path="/register" component={RegistrationForm}  />
        <Route path="/login" component={LoginForm}  />
        <PrivateRoute path="/order" component={OrderPage} />
        <PrivateRoute path="/delivery" component={DeliveryPage} />
        <PrivateRoute path="/payment" component={PaymentPage} />
        <PrivateRoute path="/summary" component={SummaryPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
