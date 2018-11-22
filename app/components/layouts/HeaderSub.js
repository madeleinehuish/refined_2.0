import React from "react";

const HeaderSub = (props) => {
	return (
		<div>
			<a className="close" href="#close" title="Close">X</a>
			<div id="create-account">
				<div className="twelve columns" id="create-title" >
					<h1>CREATE ACCOUNT</h1>
				</div>
				<form id="sign-up-form" onSubmit={onClickSubmit}>
					<div id="user-name" className="row">
						<div id="first-name" className="six columns">
							<input className="validate" id="firstName" name="signupFirstName" onChange={props.onFormChange} placeholder="First Name" type="text" value={props.signupFirstName} />
						</div>
						<div id="last-name" className="six columns">
							<input className="validate" id="lastName" name="signupLastName" onChange={props.onFormChange} placeholder="Last Name" type="text" value={props.signupLastName} />
						</div>
					</div>
					<div id="email-password" className="row">
						<div className="six columns">
							<input className="validate" id="email" name="signupEmail" onChange={props.onFormChange} placeholder="Email" type="text" value={props.signupEmail} />
						</div>
						<div className="six columns">
							<input className="validate" id="password" name="signupPassword" onChange={props.onFormChange} placeholder="Password" type="password" value={props.signupPassword} />
						</div>
					</div>
				</form>
				<div id="create-account-btn" className="twelve columns">
					<a className="close" href="#close" title="Close"><button id="create" name="action" onClick={onClickSubmit} type="submit" >
					CREATE ACCOUNT</button></a>
				</div>
			</div>
			<div id="return-to-login" >
				<div className="row">
					<p>RETURNING CUSTOMER?</p>
				</div>
				<div className="row">
					<a href="#openModal"><button id="return-to-login-btn">LOGIN</button></a>
				</div>
			</div>
		</div>
	);
}

export default HeaderSub;
