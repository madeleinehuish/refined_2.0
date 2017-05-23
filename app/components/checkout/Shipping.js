import Checkout from './Checkout';
import CheckoutCart from './CheckoutCart';
import { Link } from 'react-router';
import React from 'react';

const Shipping = React.createClass({
  handleClick() {
    this.props.handleAddToCart(this.props.product);
  },

  addShipping(event) {
    const shipping = event.target.value;

    this.props.selectShipping(shipping);
  },

  render() {
    return (
      <section id="customer" className="checkout">
        <div id="checkout-customer" className="seven columns">
          <div className="checkout-page">
            <Checkout/>
          </div>
          <div className="checkout-forms">
            <div id="shipping-info-header" className="row">
              <div id="saved-address" className="row">
                <div id="shipping-details">
                  <h5>Shipping address</h5>
                  <p>{this.props.firstName} {this.props.lastName}</p>
                  <p>{this.props.address1}</p>
                  <p>{this.props.city}, {this.props.state}, {this.props.zip}</p>
                  <p>United States</p>
                  <p id="edit"><Link to="./customer-checkout">Edit shipping address</Link></p>
                </div>
              </div>
              <div className="row shipping-method">
                <h5>Shipping method</h5>
                <form>
                  <div id="shipping-shipping" className="row">
                    <div className="one columns">
                      <input onClick={this.addShipping} type="radio" name="shipping-option" value="standard" defaultChecked="true" />
                    </div>
                    <div className="nine columns">
                      <label>Standard Shipping (estimated 3 - 7 business days)</label>
                    </div>
                    <div className="two columns">
                      <p>$4.99</p>
                    </div>
                  </div>
                  <div id="shipping-shipping" className="row">
                    <div className="one columns">
                      <input onClick={this.addShipping} type="radio" name="shipping-option" value="premium" />
                    </div>
                    <div className="nine columns">
                      <label>Premium Shipping (estimated 1 - 3 business days)</label>
                    </div>
                    <div className="two columns">
                      <p>$9.99</p>
                    </div>
                  </div>
                  <div id="shipping-shipping" className="row">
                    <div className="one columns">
                      <input onClick={this.addShipping} type="radio" name="shipping-option" value="fedex" />
                    </div>
                    <div className="nine columns">
                      <label>FedEx 2 Day</label>
                    </div>
                    <div className="two columns">
                      <p>$24.99</p>
                    </div>
                  </div>
                </form>
              </div>
              <div id="customer-navigation" className="row">
                <div className="one columns return">
                  <Link to="/customer-checkout"><img src="images/return.png" /></Link>
                </div>
                <div className="four columns return">
                  <p><Link to="/customer-checkout">Return to Customer Information</Link></p>
                </div>
                <div className="six columns">
                  <Link to="/payment"><button>Continue to Payment Method</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="checkout-cart" className="row">
          <div className="five columns">
            <CheckoutCart
              cartItems={this.props.cartItems}
              shippingCost={this.props.shippingCost}
              taxRate={this.props.taxRate}
            />
          </div>
        </div>
      </section>
    );
  }
});

export default Shipping;
