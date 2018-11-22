import { Link } from 'react-router-dom';
import React from 'react';
import UserInfo from './UserInfo';
import UserOrders from './UserOrders';

const handleLogOut = () => {
	this.props.logOut();
};

const User = () => {

    return (
			<section id="user-page">
				<div className="row" id="user-header">
					<h3>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</h3>
					<h5>{this.props.currentUser.email}</h5>
					{this.props.loggedIn} ? <Link to="/"><button onClick={this.handleLogOut}>Log out</button></Link>
					 <p></p>
				</div>

				<div className="row" id="user-details">
					<div id="user-info">
						<UserInfo
              address1={this.props.address1}
              city={this.props.city}
              state={this.props.state}
              userInformation={this.props.userInformation}
              zip={this.props.zip}
						/>
					</div>
					<div id="user-info">
						<UserOrders
							previousOrders={this.props.previousOrders}
						/>
					</div>
				</div>
			</section>
	  );
};

export default User;
