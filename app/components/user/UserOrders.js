import React from 'react';

const UserOrders = () => {

    return (
      <section id="user-previous-orders">
        <div className="seven columns" id="user-orders" >
          <h5>Order History</h5>
            <div id="user-order-history">
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
						</div>
				</div>
			</section>
		);
};

export default UserOrders;
