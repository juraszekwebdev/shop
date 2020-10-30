import React from 'react';
import {MyAccountNavigation} from "../index";
import ChangePasswordForm from "./ChangePasswordForm";

const ChangePasswordPage = () => {
	return (
		<div className="container">
			<div className="row">
				<MyAccountNavigation/>
				<ChangePasswordForm/>
			</div>
		</div>

	);
};

export default ChangePasswordPage;