import { Link } from 'react-router';
import React from 'react';
import Checkout from './Checkout';
import CheckoutCart from './CheckoutCart';
// import Success from './Success';

const Payment = React.createClass({


  setTaxRate(event) {
    this.props.setTaxRate(event.target.value);
  },

  handleClick() {
    this.props.onSubmitOrder();
    this.props.clearCart();
  },


  render() {
    return (
      <section id="customer" className="checkout">
        <div id="checkout-customer" className="seven columns">

          <div className="checkout-page">
            <Checkout
            />
          </div>

          <div className="checkout-forms">
            <div id="payment-info-header" className="row">

              <div id="payment-method">
                <h5>Payment method</h5>
                <p>All transactions are secure and encrypted. Credit card information is never stored.</p>
              </div>

              <form id="credit-card-section">
                <div id="payment-form" className="row">
                  <div id="credit-card">
                    <div className="eight columns">
                      <h5>Credit card</h5>
                    </div>
                    <div className="four columns">
                      <img src="http://i76.imgup.net/accepted_c22e0.png" />
                    </div>
                  </div>

                  <div onSubmit={ this.handleSubmit }>
                    <div className="credit-card-details">
                      <div className="credit-card-number">
                        <input type="number" name="number" onChange={this.props.handleChange} pattern="^\d{3}-\d{2}-\d{4}$" placeholder="Credit card number" autoComplete="cc-number" required/>
                      </div>

                      <div className="six columns credit-card-name">
                        <input id="cc-name" type="text" name="card-name" placeholder="Name on card" required/>
                      </div>
                      <div className="three columns credit-card-mth">
                        <input id="cc-exp-mth" type="number" name="exp_month" onChange={this.props.handleChange} placeholder="MM" min="0" required/>
                      </div>
                      <div className="three columns credit-card-year">
                        <input id="cc-year" type="number" name="exp_year" onChange={this.props.handleChange} placeholder="YY" min="0" required/>
                      </div>
                      <div className="three columns credit-card-cvc">
                        <input id="cc-cvc" type="number" name="cvc" onChange={this.props.handleChange} placeholder="CVC" min="0" required/>
                      </div>
                    </div>

                    {/* <Link to='/success'></Link> */}
                  </div>
                </div>

                <div id="verification-btn">
                  <button id="complete-order-btn" onClick={this.props.onSubmitToGetToken} type="submit">Verify Credit Card Details</button>

                  {/* <button type="submit"></button> */}
                </div>

                <div className="row shipping-method-pmt">
                  <h5>Shipping method</h5>
                  <div>
                    <div className="row choose-address">
                      <div className="one columns">
                        <input type="radio" name="address" value="standard" defaultChecked />
                      </div>
                      <div className="eleven columns">
                        <label>Same as shipping address</label>
                      </div>
                    </div>
                    <div className="row choose-address">
                      <div className="one columns">
                        <input type="radio" name="address" value="premium" />
                      </div>
                      <div className="eleven columns">
                        <label>Use a different billing address</label>
                      </div>
                    </div>

                  </div>
                </div>

              <div id="customer-navigation" className="row">
                <div className="one columns return">
                  <Link to='./shipping'><img src="images/return.png" /></Link>
                </div>
                <div className="four columns return">
                  <p><Link to='./shipping'>Return to Shipping</Link></p>
                </div>
                <div className="six columns">
                  <Link to='/success'><button id="complete-order-btn" onClick={this.handleClick}>Complete Order</button></Link>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>

        <div id="checkout-cart" className="row">
          <div className="five columns">
            <CheckoutCart
              cartItems={this.props.cartItems}
              taxRate={this.props.taxRate}
              // selectShipping={this.props.selectShipping}
              shippingCost={this.props.shippingCost}
            />
          </div>
        </div>
      </section>
    )
  }
});

export default Payment;
