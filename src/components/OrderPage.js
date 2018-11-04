import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { history } from "../routers/AppRouter";
import OrderItem from "./OrderItem";
import OrdersTotalPrice from "./OrdersTotalPrice";


const OrderPage = (props) => (
  <div className="container">
    <div className="order__title">
      <img className="order__image" src="https://image.flaticon.com/icons/svg/1187/1187451.svg" alt="order" />
      <h1>Your Order:</h1>
    </div>
    {
      props.orders.map((order) => {
        return <OrderItem key={order.id} {...order} />;
      })
    }
    <OrdersTotalPrice />
    {history.location.pathname === "/order" && <Link className="order__button" to="/delivery"><button type="button" className="btn btn-primary btn-lg">Confirm  Order</button></Link>}
  </div>
);

const mapStateToProps = (state) => {
  return {
    orders: state.basket
  };
};

export default connect(mapStateToProps)(OrderPage);
