import { Link } from 'react-router';
import React from 'react';

const handleClickRemove = () => {
  this.props.handleRemoveFromCart(this.props.cartItem);
}

const handleClickAddQuantity = (event) => {
  const newQuantity = Number(event.target.value);
  const id = (this.props.cartItem.id);

  this.props.handleClickAdd(id, newQuantity);
}

const CartItems = () => {

    return (
      <section id="cart-items" className="cart">
        <div className="one columns">
          <div className="product-image">
            <img src={this.props.cartItem.image}/>
          </div>
        </div>
        <div className="six columns">
          <p>{this.props.cartItem.name}</p>
        </div>
        <div className="two columns">
          <div id="qty-counter">
              <input type="number" name="qty" value={this.props.cartItem.quantity} onClick={this.handleClickAddQuantity} onChange={this.handleClickAddQuantity} min="0"/>
            {/* <span className="qty-text">1</span>
            <span className="up-arrow" data-value="1">
              <img src=""/>
            </span> */}
          </div>
        </div>
        <div className="three columns">
          <p id="cart-item-price" className="bling">{Number(this.props.cartItem.price).toFixed(2)}</p>
          {/* <input type="image" src="http://www.iconshock.com/img_vista/IPHONE/general/jpg/trash_can_icon.jpg"/> */}
          <input onClick={this.handleClickRemove} type="image" src="http://www.iconshock.com/img_vista/IPHONE/general/jpg/trash_can_icon.jpg"/>
        </div>
      </section>
    )
};

export default CartItems;
