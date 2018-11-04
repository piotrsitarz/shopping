import React from "react";
import { connect } from "react-redux";
import { addProductToBasket } from "../actions/basket";

class ProductTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: props.imgUrl,
      amount: props.amount,
      nameOfProduct: props.nameOfProduct,
      description: props.description,
      price: props.price
    };
  }
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^[1-9][0-9]*$/)) {
      this.setState(() => ({ amount }));
    }
  };
  render() {
    return (
      <div className="col-lg-6 col-12">
        <div className="card p-3 mb-5 bg-white rounded">
          <img className="card__img card-img-top" src={this.state.imgUrl} alt="Card image cap" />
          <div className="card-body">
            <h3 className="card-title">{this.state.nameOfProduct}</h3>
            <p className="card-text">{this.state.description}</p>
            <h1 className="card__price card-title pricing-card-title align-middle">{this.props.price}$ <small className="text-muted"> / pc</small></h1>
            <button
              type="button"
              className="card__button btn btn-primary btn-lg btn-block"
              onClick={() => {this.props.dispatch(addProductToBasket({nameOfProduct:this.state.nameOfProduct, amount:this.state.amount, price:this.state.price}))}}
              disabled={this.state.amount < 1 || this.props.basket.length > 2}
              >
                Add To Basket
              </button>
            <div className="form-group">
              <input type="number" className="form-control input-lg" min="1" placeholder="Number of items" value={this.state.amount} onChange={this.onAmountChange}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    basket: state.basket
  };
};

export default connect(mapStateToProps)(ProductTile);
