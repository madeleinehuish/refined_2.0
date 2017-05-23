import { Link } from 'react-router';
import React from 'react';

const handleClick = () => {
  this.props.handleAddToCart(this.props.product);
}

const Product = () => {

  return (
    <section id="product">
        {/* <div id="products-to-buy" className="four columns">
          <div className="product-image">
            <img src={this.props.product.image}/>
          </div>
          <div className="name-price">
            <p id="product-name">{(this.props.product.name).toUpperCase()}</p>
            <p className="bling">{Number(this.props.product.price).toFixed(2)}</p>
          </div>
          <Link to='/cart'><button onClick={this.handleClick}>ADD TO CART</button></Link>
        </div> */}
    </section>
  );
};

export default Product;
