import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { history } from "../routers/AppRouter";
import { startLogout } from "../actions/auth";

const Header = (props) => (
  <header>
    <div className="header__info">
      {props.basket.length >2 && <p>3 is maximum number of products.</p>}
    </div>
    <button className="header__logout btn btn-dark" onClick={() => {props.dispatch(startLogout())}}>Logout</button>
    {history.location.pathname === "/" &&
      <div className="header__button">
        {props.basket.length >0 && <Link to="/login"><button type="button" className="btn btn-primary btn-lg">SUBMIT ORDER</button></Link>}
      </div>
    }
    <div className="header__basket">
      <img className="basket__img" src="https://cdns.iconmonstr.com/wp-content/assets/preview/2013/240/iconmonstr-shopping-cart-3.png" alt="basket shopping" />
      <p>Basket({props.basket.length})</p>
    </div>
  </header>
);

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
    isAuthenticated: !!state.auth.uid
  };
};

export default connect(mapStateToProps)(Header);
