import React from 'react';
import {MyAccountNavigation} from "../index";
import Dashboard from "./Dashboard";

const MyAccountPage = () => {
	return (
		<div className="container">
			<div className="row">
				<MyAccountNavigation/>
				<Dashboard/>
			</div>
		</div>
	);
};

export default MyAccountPage;