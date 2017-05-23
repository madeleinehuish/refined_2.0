import { Link } from 'react-router';
import React from 'react';

const CheckoutCartItems = React.createClass({
  render() {
    return (
      <section id="checkout-cart-items">
        <div className="two columns product-thumbnail">
          <div className="product-thumbnail__wrapper">
            <img src={this.props.cartItem.image}/>
          </div>
            <span className="product-thumbnail__quantity" >{this.props.cartItem.quantity}</span>
        </div>
        <div className="seven columns text">
          <p>{this.props.cartItem.name}</p>
        </div>
        <div className="three columns text">
          <p className="bling">{Number(this.props.cartItem.price).toFixed(2)}</p>
        </div>
      </section>
    )
  }
});

export default CheckoutCartItems;
