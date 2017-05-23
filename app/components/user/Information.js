import React from 'react';

const Information = () => {

    return (
			<section id="information">
				<p>{this.props.address1}</p>
				<p>{this.props.city}</p>
				<p>{this.props.state}</p>
				<p>{this.props.zip}</p>
				<p id="edit">Edit shipping address</p>
			</section>
		);
};

export default Information;
