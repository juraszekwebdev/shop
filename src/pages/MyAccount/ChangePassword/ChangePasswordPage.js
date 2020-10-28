import React from 'react';
import {MyAccountNavigation} from "../index";
import ChangePasswordForm from "./ChangePasswordForm";

const ChangePasswordPage = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-4">
					<MyAccountNavigation/>
				</div>
				<div className="col-lg-8">
					<ChangePasswordForm/>
				</div>
			</div>
		</div>

	);
};

export default ChangePasswordPage;