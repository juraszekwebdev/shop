import React from 'react';
import {MyAccountNavigation} from "../index";
import EditAddressForm from "./EditAddressForm";

const EditAddressPage = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-4">
					<MyAccountNavigation/>
				</div>
				<div className="col-lg-8">
					<EditAddressForm/>
				</div>
			</div>
		</div>
	);
};

export default EditAddressPage;