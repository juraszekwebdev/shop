import React from 'react';
import {SignInForm} from "./index";

const SignInPage = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-5 col-md-8 m-auto">
					<SignInForm/>
				</div>
			</div>
		</div>
	);
};

export default SignInPage;