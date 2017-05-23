import { Link } from 'react-router';
import React from 'react';
import Checkout from './Checkout';
import CheckoutCart from './CheckoutCart';
import Payment from './Payment';
import Shipping from './Shipping';
// import FormIncomplete from './FormIncomplete';

const Customer = React.createClass({
  logOut() {
    this.props.logOut();
  },

  setTaxRate(event) {
    this.props.setTaxRate(event.target.value);
  },

  formUpdate () {
    this.props.onFormChange()
  },

  render() {
    return (
      <section id="customer" className="checkout">
        <div id="checkout-customer" className="seven columns">

          <div className="checkout-page">
            <Checkout
              // onFormChange={this.props.onFormChange}
            />
          </div>

          <div className="checkout-forms">
            <div id="customer-info-header" className="row">
             {this.props.loggedIn ? <div></div> :
              <div id="customer-email">
                <h5>Customer information</h5>
                <form>
                  <input type="email" name="email" placeholder="Email" onBlur={this.props.onFormChange} />
                  {/* <input type="email" name="email" placeholder="Email" onBlur={this.props.onFormChange} value={this.props.email} required/> */}
                </form>
                <p>Already have an account?<a href='#openModal'> Login</a></p>
              </div>}

              <div id="customer-form" className="row">
                <div id="shipping-details">
                  <h5>Shipping address</h5>
                  <form>
                    <div className="six columns shipping-first-name">
                      <input placeholder="First Name" id="firstName" name="firstName" type="text" onChange={this.props.onFormChange} value={this.props.firstName} className="validate" required/>
                    </div>
                    <div className="six columns shipping-last-name">
                      <input type="text" name="lastName" placeholder="Last name" onChange={this.props.onFormChange} value={this.props.lastName} className="validate" required/>
                    </div>

                    <div className="company">
                      <input type="text" name="company" placeholder="Company (optional)"/>
                    </div>

                    <div className="eight columns shipping-address">
                      <input type="text" name="address1" placeholder="Address" onChange={this.props.onFormChange} value={this.props.address1} className="validate" required/>
                    </div>
                    <div className="four columns shipping-apartment">
                      <input type="text" name="address2" placeholder="Apt, suite, etc. (optional)" onChange={this.props.onFormChange} value={this.props.address2} className="validate" />
                    </div>

                    <div className="city">
                      <input type="text" name="city" placeholder="City" onChange={this.props.onFormChange} value={this.props.city} className="validate" required/>
                    </div>

                    <div className="five columns shipping-country">
                      <input id="country" type="text" name="country" placeholder="United States" readOnly/>
                      {/* <select name="country" form="countryform" required>
                        <option value="USA">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Canada">Mexico</option>
                      </select> */}
                    </div>
                    <div className="five columns shipping-state">
                      <select name="state" form="stateform" onChange={this.props.onFormChange} value={this.props.state} className="validate" required>
                      {/* <select name="state" form="stateform" onChange={this.props.onFormChange} value={this.props.state} className="validate" required> */}
                        <option value="state">Select State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                    </div>
                    <div className="two columns shipping-zipcode">
                      <input type="text" name="zip" placeholder="Zip code" onBlur={this.props.setTaxRate} onChange={this.props.onFormChange} value={this.props.zip} className="validate" required/>
                    </div>
                    {/* <select onChange={this.props.handleSort} value={this.props.sortType}>
                      <option value="name">Name</option>
                      <option value="price">Price</option>
                      <option value="rating">Rating</option>
                    </select> */}

                    <div className="phone">
                      <input type="tel" name="phone" placeholder="Phone number (optional)"/>
                    </div>

                    {/* <div className="save-information">
                      <div id="save-checkbox" className="six columns">
                        <input type="checkbox" name="save" value="save-info" />
                      </div>
                      <div id="info-save" className="six columns">
                        <p>Save this information for next time</p>
                      </div>
                    </div> */}
                  </form>
                </div>
              </div>

              <div className="row">
                {this.props.formComplete ? null : <h5 id="complete-form">Please complete all required form fields</h5>}
              </div>

              <div id="customer-navigation" className="row">
                <div className="one columns return">
                  <Link to='./cart'><img src="images/return.png" /></Link>
                </div>
                <div className="four columns return">
                  <p><Link to='./cart'>Return to Cart</Link></p>
                </div>
                {/* <div className="six columns"> */}
                  {this.props.formComplete ?
                  <div className="six columns">  <Link to='/shipping'><button onChange={this.formUpdate}>Continue to Shipping Method</button></Link></div>
                    : <div className="six columns"><button id="continue-shipping">Continue to Shipping Method</button></div>}
                {/* </div> */}
              </div>

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

export default Customer;
