import React from 'react';

const OrderHistory = () => {

    return (
	  <section id="user-order-history">
        <div className="two columns product-thumbnail">
          <div className="product-thumbnail__wrapper">
            <img src="images/woodsman-beard-oil.png" />
          </div>
            <span className="product-thumbnail__quantity">1</span>
        </div>
        <div className="seven columns text">
          <p>Product name</p>
        </div>
        <div className="three columns text">
          <p className="bling">20</p>
        </div>
	  </section>
    );

};

export default OrderHistory;
