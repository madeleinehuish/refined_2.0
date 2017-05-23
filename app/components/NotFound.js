import { Link } from 'react-router';
import React from 'react';

const NotFound = () => {

    return (
      <main id="not-found">
        <div id="nf-header">
          <h3 id="four-o-four">404</h3>
          <h3>YOU WON'T FIND BEARD OR STACHE PRODUCTS HERE</h3>
        </div>
        <div id="nf-list">
          <ul>
            <li>Try these pages instead: </li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/productslist">Products</Link></li>
            <li><Link to="/guides">Guides</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/history">History</Link></li>
          </ul>
        </div>
        <div id="beard-gifs">
          <p>Or hang around for some beard gif</p>
          <img id="beard-hang" src="http://i.giphy.com/Y6ne0Vik9UmT6.gif" />
          <img id="she-beard" src="http://i.giphy.com/hlrC0QXsmbBSg.gif" />
          <img id="beard-food" src="http://i.giphy.com/n94I6qyMbVzRS.gif" />
        </div>
      </main>
    );
};

export default NotFound;
