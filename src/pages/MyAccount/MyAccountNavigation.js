import React from 'react';
import {NavLink} from "react-router-dom";

const MyAccountNavigation = () => {
	return (
		<nav className="card my-account-navigation">
			<div className="card-body">
				<div className="card-title">
					<h5 className="h5">Navigation</h5>
				</div>
				<ul>
					<li>
						<NavLink to="/my-account" exact>Dashboard</NavLink>
					</li>
					<li>
						<NavLink to="/my-account/edit-personal-data">Edit personal data</NavLink>
					</li>
					<li>
						<NavLink to="/my-account/edit-address">Edit address</NavLink>
					</li>
					<li>
						<NavLink to="/my-account/change-password">Change password</NavLink>
					</li>
					<li>
						<NavLink to="/my-account/orders">Orders</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default MyAccountNavigation;