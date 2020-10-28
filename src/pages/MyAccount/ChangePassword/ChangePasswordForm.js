import React, {useContext, useState} from 'react';
import Alert from "../../../components/Alert";
import {AuthenticationService} from "../../../service/authentication.service";
import {AlertStore} from "../../../store/stores/alert.store";

const ChangePasswordForm = () => {
	const [user, setUser] = useState({
		oldPassword: "",
		newPassword: "",
		repeatNewPassword: ""
	});

	const alertState = useContext(AlertStore);

	const onSubmit = e => {
		e.preventDefault();
		alertState.clear();
		AuthenticationService.changePassword(user).then(response => {
			alertState.set("success", "Password has been changed");
		}).catch(error => {
			console.error(error);
			alertState.set("danger", error.response.data.statusMsg);
		})
	}

	const onChange = e => {
		const {name, value} = e.target;
		setUser({
			...user,
			[name]: value
		});
	}

	return (
		<form onSubmit={onSubmit} className="card">
			<div className="card-body">
				<div className="card-title">
					<h5 className="h5">Change password</h5>
					<hr/>
				</div>
				<Alert/>
				<div className="form-group">
					<label htmlFor="password">Old password</label>
					<input
						type="password"
						className="form-control"
						name="oldPassword"
						id="oldPassword"
						placeholder="Old password"
						value={user.oldPassword}
						onChange={onChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">New password</label>
					<input
						type="password"
						className="form-control"
						name="newPassword"
						id="newPassword"
						placeholder="New password"
						value={user.newPassword}
						onChange={onChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Repeat new password</label>
					<input
						type="password"
						className="form-control"
						name="repeatNewPassword"
						id="repeatNewPassword"
						placeholder="Repeat new password"
						value={user.repeatNewPassword}
						onChange={onChange}
						required
					/>
				</div>
				<div className="text-center">
					<button type="submit" className="btn btn-primary">Change password</button>
				</div>
			</div>
		</form>
	);
};

export default ChangePasswordForm;