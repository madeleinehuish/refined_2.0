import { Link } from 'react-router-dom';
import React, { Component } from 'react';

const logOut = () => {
  this.props.logOut();
}

const onClickSubmit = (event) => {
  this.props.onSubmit();
}

const Header = (props) => {

    return (
    <header>
      <div className="twelve columns">
        <div className="six columns" id="logo">
          <Link to="/"><img src="images/logo_white.png" /></Link>
        </div>
        <nav className="six columns">
          <ul>
             {props.loggedIn ? <li key={props.currentUser.id}><Link to={'/user'}>{props.currentUser.firstName}</Link></li>
              : <li id="login-icon"><a href="#openModal"><img src="images/login.png" /></a></li>}
            <li id="products"><Link to="/productslist">Products</Link></li>
            <li><Link to="/guides">Guides</Link></li>
            <li><Link to="/cart"><img src="images/cart.png" /></Link></li>
          </ul>
        </nav>
      </div>
      <div id="openModal" className="modalDialog">
        <div>
          <a href="#close" title="Close" className="close">X</a>
          <div id="login-account">
            <div id="login-title" className="twelve columns">
              <h1>RETURNING CUSTOMERS</h1>
            </div>
            <form id="login-form">
              <div id="email-password" className="row">
                <div id="email" className="six columns">
                  <input className="validate" id="email" name="signupEmail" onChange={props.onFormChange} placeholder="Email" type="text" value={props.signupEmail} />
                </div>
                <div id="password" className="six columns">
                  <input className="validate" id="password" name="signupPassword" onChange={props.onFormChange} placeholder="Password" type="password" value={props.signupPassword} />
                </div>
              </div>
            </form>
            <div className="twelve columns" id="login-account-btn">
              <a className="close" href="#close" title="Close"><button id="login-btn" name="action" onClick={() => props.logIn(props.currentUser)} type="submit">
              LOGIN</button></a>
            </div>
              <p>Forgot your password?</p>
            </div>
            <div id="return-to-signup">
              <p>NEW CUSTOMER?</p>
              <a href="#openModal-signup"><button>CREATE AN ACCOUNT</button></a>
            </div>
          </div>
        </div>
        <div id="openModal-signup" className="modalDialog">
          <div>
            <a className="close" href="#close" title="Close">X</a>
            <div id="create-account">
              <div className="twelve columns" id="create-title" >
                <h1>CREATE ACCOUNT</h1>
              </div>
              <form id="sign-up-form" onSubmit={onClickSubmit}>
                <div id="user-name" className="row">
                  <div id="first-name" className="six columns">
                    <input className="validate" id="firstName" name="signupFirstName" onChange={props.onFormChange} placeholder="First Name" type="text" value={props.signupFirstName} />
                  </div>
                  <div id="last-name" className="six columns">
                    <input className="validate" id="lastName" name="signupLastName" onChange={props.onFormChange} placeholder="Last Name" type="text" value={props.signupLastName} />
                  </div>
                </div>
                <div id="email-password" className="row">
                  <div id="email" className="six columns">
                    <input className="validate" id="email" name="signupEmail" onChange={props.onFormChange} placeholder="Email" type="text" value={props.signupEmail} />
                  </div>
                  <div id="password" className="six columns">
                    <input className="validate" id="password" name="signupPassword" onChange={props.onFormChange} placeholder="Password" type="password" value={props.signupPassword} />
                  </div>
                </div>
              </form>
              <div id="create-account-btn" className="twelve columns">
                <a className="close" href="#close" title="Close"><button id="create" name="action" onClick={onClickSubmit} type="submit" >
                CREATE ACCOUNT</button></a>
              </div>
            </div>
            <div id="return-to-login" >
              <div className="row">
                <p>RETURNING CUSTOMER?</p>
              </div>
              <div className="row">
                <a href="#openModal"><button id="return-to-login-btn">LOGIN</button></a>
              </div>
            </div>
          </div>
        </div>
    </header>
    );
};

export default Header;
