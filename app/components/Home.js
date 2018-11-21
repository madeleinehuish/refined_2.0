import { Link } from 'react-router-dom';
import React from 'react';

const Home = () => {

    return (
      <section id="home">
        <div id="hero">
          <h1>Refined</h1>
          <div className="twelve columns">
            <button><Link to="/productslist">SHOP</Link></button>
          </div>
        </div>
        <div id="blurb" className="row">
          <div className="six columns">
            <h3>Legendary beard and mustache grooming products</h3>
          </div>
          <div className="six columns">
            <img src="images/woodsman-beard-balm.png" />
            <img src="images/woodsman-beard-oil.png" />
          </div>
        </div>
        <div id="panel-top" className="row">
          <div className="panel-header">
            <ul>
              <li><Link to="/guides">GUIDES</Link></li>
              <li><Link to="/productslist">PRODUCTS</Link></li>
              <li><Link to="/history">HISTORY</Link></li>
            </ul>
          </div>
        </div>
        <div id="img-panel" className="row">
          <div id="guides" className="four columns">
            <img className="img-responsive" src="images/grooming.png" />
            <div id="guides-text" className="overlay">
              <h4><Link to="/guides">Guides</Link></h4>
            </div>
          </div>
          <div id="products" className="four columns">
            <img className="img-responsive" src="images/beard-kit.jpg" />
            <div id="products-text" className="overlay">
              <h4><Link to="/productslist">Products</Link></h4>
            </div>
          </div>
          <div id="history" className="four columns">
            <img className="img-responsive" src="images/history.jpg" />
            <div id="history-text" className="overlay">
              <h4><Link to="/history">History</Link></h4>
            </div>
          </div>
        </div>
        <div className="row" id="shipping-find-us">
          <div className="six columns" id="homepage-shipping">
            <h4>Buy Online: free delivery on all orders over $50</h4>
            <img src="images/shipping.png" />
          </div>
          <div className="six columns" id="find-us">
            <img src="images/location.png" />
            <h4 className="address">Find Us:</h4>
            <h4 className="address">111 S Jackson St</h4>
            <h4 className="address">Seattle, WA 98104</h4>
          </div>
        </div>
        <div className="row" id="location-map">
          <div className="twelve columns" id="map">
              <img src="images/map.png" />
          </div>
        </div>
      </section>
    );
};

export default Home;
