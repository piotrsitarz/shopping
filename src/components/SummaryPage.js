import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import OrderPage from "./OrderPage";
import DeliveryPage from "./DeliveryPage";

const SummaryPage = (props) => (
  <div className="container">
    <div className="summary__title">
      <h1 className="summary__heading">Congratulations! {props.user.name} {props.user.surname}</h1>
    </div>
    <OrderPage />
    <h1 className="summary__heading">Will be delivered within three working days to:</h1>
    <DeliveryPage />
    <Link to="/"><button type="button" className="summary__button btn btn-primary btn-lg">Back To Shop</button></Link>
  </div>
);

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(SummaryPage);
