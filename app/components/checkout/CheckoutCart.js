import { Link } from 'react-router';
import React from 'react';
import CheckoutCartItems from './CheckoutCartItems';


const CheckoutCart = React.createClass({
  render() {
    const cartItems = this.props.cartItems.map((item, index) => {
      return <CheckoutCartItems
        cartItem={item}
        key={index}
        cartItems={this.props.cartItems}
      />
    });

    return (
      <section className="checkout-cart">
        <div id='products-in-checkout-cart'>
          <div className="row">
            <div className="updated-checkout-cart">
              <div className="row">
                { cartItems }
                </div>
              </div>
          </div>

            <div id="running-totals" className="row">
              <div id="payment-headings" className=" six columns">
                <p>Subtotal: </p>
                <p>Tax: </p>
                <p>Shipping: </p>
              </div>
              <div id="payment-costs" className=" six columns">
                <p className="bling">{(this.props.cartItems.reduce((amount, curr, index) => {
                  return amount + curr.price * curr.quantity;
                  }, 0)).toFixed(2)}</p>
                <p className="bling">{(this.props.cartItems.reduce((amount, curr, index) => {
                  return amount + ((curr.price * curr.quantity) * this.props.taxRate);
                  }, 0)).toFixed(2)}</p>
                <p className="bling">{this.props.shippingCost}</p>
              </div>
            </div>

            <div id="checkout-totals" className="row">
              <div id="total" className="row">
                <div className="eight columns">
                  <p id="total-heading">Total: </p>
                </div>
              <div className="four columns cost">
                <p id="total-currency">USD </p>
                {/* <p id="total-cost">$0 </p> */}
                <p id="total-cost" className="bling">{(this.props.cartItems.reduce((amount, curr, index) => {
                  return amount + ((curr.price * curr.quantity) * this.props.taxRate) + (curr.price * curr.quantity)
                  +this.props.shippingCost;
                }, 0)).toFixed(2)}</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    )
  }
});

export default CheckoutCart;
