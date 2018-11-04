import React from "react";
import { connect } from "react-redux";
import totalPrice from "../selectors/ordersTotalSum";

const OrderTotalPrice = (props) => (
  <div className="content-container">
    <h2 className="order__total-price">{props.totalPrice}$</h2>
  </div>
);

const mapStateToProps = (state) => {
  return {
    totalPrice: totalPrice(state.basket)
  };
};

export default connect(mapStateToProps)(OrderTotalPrice);
