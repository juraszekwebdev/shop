import React from 'react';
import {Link} from "react-router-dom";

const SignInLinks = () => {
	return (
		<div className="login-links mt-4 text-center">
			<Link to="/password-recovery">Forget password?</Link><br/>
			<Link to="/sign-up">Create new account!</Link>
		</div>
	);
};

const SignUpLinks = () => {
	return (
		<div className="login-links mt-4 text-center">
			<Link to="/password-recovery">Already have account? Sign in!</Link><br/>
		</div>
	);
};

export {
	SignInLinks,
	SignUpLinks
}