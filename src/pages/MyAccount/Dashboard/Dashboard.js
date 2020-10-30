import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {UserStore} from "../../../store/stores/user.store";

const Dashboard = () => {
	const {user} = useContext(UserStore);
	console.log(user)
	const isAddressExists = () => {
		return user.address !== null;
	}
	return (
		<div className="col-lg-8">
			<div className="card">
				<div className="card-body">
					<div className="row">
						<div className="col-lg-6">
							<h5 className="h5">Account information</h5>
							<hr/>
							<ul className="list-unstyled">
								<li>ID: <strong>{user.id}</strong></li>
								<li>Email: <strong>{user.email}</strong></li>
								<li>First name: <strong>{user.personalData.firstName}</strong></li>
								<li>Last name: <strong>{user.personalData.lastName}</strong></li>
								<li>Contact phone: <strong>{user.personalData.phoneNumber}</strong></li>
							</ul>
							<NavLink to="/my-account/edit-address" className="btn btn-secondary">Edit</NavLink>
						</div>
						<div className="col-lg-6 mt-4 mt-lg-0">
							<h5 className="h5">Address informaction</h5>
							<hr/>
							{
								isAddressExists() &&
								<address>
									<strong>{user.personalData.firstName} {user.personalData.lastName}</strong><br/>
									{user.address.street} {user.address.houseNumber} {user.address.apartmentNumber}<br/>
									{user.address.city} {user.address.postalCode}
								</address>
							}
							<NavLink to="/my-account/edit-address" className="btn btn-secondary">Edit</NavLink>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;