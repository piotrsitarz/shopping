import React from "react";
import { connect } from "react-redux";
import ProductTile from "./ProductTile";

const ProductsPage = (props) => (
  <div className="container">
    <div className="row justify-content-md-center">
      {
        props.products.map((product) => {
          return <ProductTile key={product.id} {...product} />;
        })
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(ProductsPage);
