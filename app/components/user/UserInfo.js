import Information from './Information';
import React from 'react';

const UserInfo = () =>{

    return (
	  <section id="user-information">
        <div className="five columns" id="user-info">
          <h5>Your Information</h5>
            <div>
              <Information
                address1={this.props.address1}
                city={this.props.city}
                state={this.props.state}
                zip={this.props.zip}
              />
            </div>
        </div>
	   </section>
   );
};

export default UserInfo;
