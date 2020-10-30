import React, {useContext, useState} from 'react';
import Alert from "../../../components/Alert";
import {AuthenticationService} from "../../../service/authentication.service";
import jwt from "jsonwebtoken";
import Api from "../../../api/Api";
import {AlertStore} from "../../../store/stores/alert.store";
import {UserStore} from "../../../store/stores/user.store";

const initialState = {
	city: "",
	postalCode: "",
	street: "",
	houseNumber: "",
	apartmentNumber: "",
};

const EditAddressForm = () => {
	const {user, login} = useContext(UserStore);
	const [address, setAddress] = useState(user.address !== null ? user.address : initialState);
	const alertState = useContext(AlertStore);

	const onSubmit = e => {
		e.preventDefault();
		alertState.clear();
		AuthenticationService.editAddress({address}).then(response => {
			alertState.set("success", "Address has been updated successfully");
			const token = response.data.data.token;
			const user = jwt.decode(token);
			login({user, token});
			Api.defaults.headers['Authorization'] = 'Bearer ' + token;
		}).catch(error => {
			console.error(error);
			alertState.set("danger", error.response.data.statusMsg);
		});
	}

	const onChange = e => {
		const {name, value} = e.target;
		setAddress({
			...address,
			[name]: value
		});
	}

	return (
		<div className="col-lg-8">
			<form onSubmit={onSubmit} className="card mb-3">
				<div className="card-body">
					<div className="card-title">
						<h5 className="h5">Edit address</h5>
						<hr/>
					</div>
					<Alert/>
					<div className="form-group">
						<label htmlFor="city">City</label>
						<input
							type="text"
							className="form-control"
							name="city"
							id="city"
							value={address.city}
							onChange={onChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="firstName">Postal code</label>
						<input
							type="text"
							className="form-control"
							name="postalCode"
							id="postalCode"
							value={address.postalCode}
							onChange={onChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="street">Street</label>
						<input
							type="text"
							className="form-control"
							name="street"
							id="street"
							value={address.street}
							onChange={onChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="houseNumber">House number</label>
						<input
							type="text"
							className="form-control"
							name="houseNumber"
							id="houseNumber"
							value={address.houseNumber}
							onChange={onChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="apartmentNumber">Apartment number</label>
						<input
							type="text"
							className="form-control"
							name="apartmentNumber"
							id="apartmentNumber"
							value={address.apartmentNumber}
							onChange={onChange}
							required
						/>
					</div>
					<div className="text-center">
						<button type="submit" className="btn btn-primary">Update</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default EditAddressForm;