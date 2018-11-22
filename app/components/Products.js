import { Link } from 'react-router-dom';
import React from 'react';

const handleClick = () => {
  this.props.handleAddToCart(this.props.product);
}

const Products = (props) => {

  console.log('props in products: ', props);

  return (
    <section id="products">
      <div className="four columns" id="products-to-buy">
        <div className="product-image">
          <a href="#openModal-product"><img src={props.product.image} /></a>
        </div>
        <div className="name-price">
          <p id="product-name">{(props.product.name).toUpperCase()}</p>
          <p className="bling">{Number(props.product.price).toFixed(2)}</p>
        </div>
        <Link to="/cart"><button onClick={handleClick}>ADD TO CART</button></Link>
      </div>
      <div className="modalDialog-product" id="openModal-product">
        <div>
          <a className="close" href="#close" title="Close">X</a>
          <div id="product-modal">
            <div className="twelve columns" id="product-title">
              <h1>{props.product.name}</h1>
            </div>
            <div className="row" id="product-content">
              <div className="five columns" id="product-image">
                <img id="modal-product-image" src={props.product.image} />
              </div>
              <div className="seven columns" id="product-details">
                <div className="row" id="rating-row">
                  <p id="rating"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></p>
                  <p id="number-of-reviews">117 reviews</p>
                </div>
                <div className="row">
                  <p id="price">{props.product.price}</p>
                  <p id="description">{props.product.description}</p>
                <div className="row">
                    <a className="close" href="#close" title="Close">
                      <button
                        id="modal-product-btn"
                        onClick={handleClick}
                      >ADD TO CART
                      </button></a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
