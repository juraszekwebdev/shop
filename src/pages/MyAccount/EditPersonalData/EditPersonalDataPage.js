import React from 'react';
import {MyAccountNavigation} from "../index";
import EditPersonalDataForm from "./EditPersonalDataForm";

const EditPersonalDataPage = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-4">
					<MyAccountNavigation/>
				</div>
				<div className="col-lg-8">
					<EditPersonalDataForm/>
				</div>
			</div>
		</div>
	);
};

export default EditPersonalDataPage;