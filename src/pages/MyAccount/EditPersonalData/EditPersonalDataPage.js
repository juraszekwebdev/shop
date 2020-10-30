import React from 'react';
import {MyAccountNavigation} from "../index";
import EditPersonalDataForm from "./EditPersonalDataForm";

const EditPersonalDataPage = () => {
	return (
		<div className="container">
			<div className="row">
				<MyAccountNavigation/>
				<EditPersonalDataForm/>
			</div>
		</div>
	);
};

export default EditPersonalDataPage;