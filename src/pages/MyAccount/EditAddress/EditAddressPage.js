import React from 'react';
import {MyAccountNavigation} from "../index";
import EditAddressForm from "./EditAddressForm";

const EditAddressPage = () => {
	return (
		<div className="container">
			<div className="row">
				<MyAccountNavigation/>
				<EditAddressForm/>
			</div>
		</div>
	);
};

export default EditAddressPage;