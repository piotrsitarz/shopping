import React from "react";
import { connect } from "react-redux";

const OrderItem = (props) => (
  <div>
    <div className="list-group-item d-flex justify-content-between lh-condensed">
      <h1 className="order__item card-title pricing-card-title">{props.amount} <small className="text-muted">x </small>{props.nameOfProduct}<small className="text-muted">({props.price}$)</small></h1>
    </div>
  </div>
);

export default OrderItem;
