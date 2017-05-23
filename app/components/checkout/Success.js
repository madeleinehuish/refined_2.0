import React from 'react';

const Success = React.createClass({
  render() {
    return (
      <section id="success">
        <div className="row"></div>
        <div className="row"></div>
        <div className="row">
          <h5>THANK YOU FOR YOUR MANLY ORDER</h5>
          <p id="confirmation">You will receive an email shortly at <span id="email-confirmation">{this.props.email}</span></p>
          <p id="sit-back">Now sit back, and let that beard grow</p>
          <div className="row">
            <img id="beard" src="images/beard.png" />
          </div>
        </div>
      </section>
    );
  }
});

export default Success;
