import React, {useContext, useState} from 'react';
import Alert from "../../../components/Alert";
import {AuthenticationService} from "../../../service/authentication.service";
import jwt from "jsonwebtoken";
import Api from "../../../api/Api";
import {AlertStore} from "../../../store/stores/alert.store";
import {UserStore} from "../../../store/stores/user.store";

const initialState = {
	firstName: "",
	lastName: "",
	phoneNumber: "",
};

const EditPersonalDataForm = () => {
	const {user, login} = useContext(UserStore);
	const [personalData, setPersonalData] = useState(user.personalData !== null ? user.personalData : initialState);
	const alertState = useContext(AlertStore);

	const onSubmit = e => {
		e.preventDefault();
		alertState.clear();
		AuthenticationService.editPersonalData({personalData}).then(response => {
			alertState.set("success", "Personal data has been updated successfully");
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
		setPersonalData({
			...personalData,
			[name]: value
		});
	}

	return (
		<form onSubmit={onSubmit} className="card">
			<div className="card-body">
				<div className="card-title">
					<h5 className="h5">Edit personal data</h5>
					<hr/>
				</div>
				<Alert/>
				<div className="form-group">
					<label htmlFor="firstName">First name</label>
					<input
						type="text"
						className="form-control"
						name="firstName"
						id="firstName"
						value={personalData.firstName}
						onChange={onChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="lastName">Last name</label>
					<input
						type="text"
						className="form-control"
						name="lastName"
						id="lastName"
						value={personalData.lastName}
						onChange={onChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="phoneNumber">Phone number</label>
					<input
						type="text"
						className="form-control"
						name="phoneNumber"
						id="phoneNumber"
						value={personalData.phoneNumber}
						onChange={onChange}
						required
					/>
				</div>
				<div className="text-center">
					<button type="submit" className="btn btn-primary">Update</button>
				</div>
			</div>
		</form>
	);
};

export default EditPersonalDataForm;