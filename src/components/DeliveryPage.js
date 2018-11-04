import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { history } from "../routers/AppRouter";

const DeliveryPage = (props) => (
  <div className="container">
    <div className="delivery__title">
      <img className="delivery__img" src="https://image.flaticon.com/icons/svg/609/609361.svg" alt="deliver" />
      <h1>Delivery Details:</h1>
    </div>
    <div className="list-group-item d-flex justify-content-between lh-condensed">
      <h1 className="order__item card-title pricing-card-title">{props.user.name} {props.user.surname}</h1>
    </div>
    <div className="list-group-item d-flex justify-content-between lh-condensed">
      <h1 className="order__item card-title pricing-card-title">{props.user.address}</h1>
    </div>
    <div className="list-group-item d-flex justify-content-between lh-condensed">
      <h1 className="order__item card-title pricing-card-title">{props.user.phone}</h1>
    </div>
    {history.location.pathname === "/delivery" && <Link className="delivery__button" to="/payment"><button type="button" className="btn btn-primary btn-lg">Confirm Delivery</button></Link>}
  </div>
);

const mapStateToProps = (state) => {
  console.log("state",state);
  console.log("state user", state.user);
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(DeliveryPage);
