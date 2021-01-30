import React from 'react';
import {MyAccountNavigation} from "../index";
import EditAddressForm from "./EditAddressForm";

const EditAddressPage = () => {
	return (
		<div className="container">
			<div className="row">
				<MyAccountNavigation/>
				<div className="col-lg-8">
					<EditAddressForm isRequired={false}/>
				</div>
			</div>
		</div>
	);
};

export default EditAddressPage;