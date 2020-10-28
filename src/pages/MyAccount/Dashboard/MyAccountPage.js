import React from 'react';
import {MyAccountNavigation} from "../index";
import Dashboard from "./Dashboard";

const MyAccountPage = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-4">
					<MyAccountNavigation/>
				</div>
				<div className="col-lg-8">
					<Dashboard/>
				</div>
			</div>
		</div>
	);
};

export default MyAccountPage;