import React, {useContext, useState} from 'react';
import {SignInLinks} from "./index";
import {AuthenticationService} from "../../service/authentication.service";
import Alert from "../../components/Alert";
import {useHistory} from "react-router";
import jwt from "jsonwebtoken";
import Api from "../../api/Api";
import {UserStore} from "../../store/stores/user.store";
import {AlertStore} from "../../store/stores/alert.store";

const SignInForm = () => {
	const [user, setUser] = useState({
		email: "",
		password: ""
	});

	const alertState = useContext(AlertStore);
	const {login} = useContext(UserStore);
	const history = useHistory();

	const onSubmit = e => {
		e.preventDefault();
		alertState.clear();

		AuthenticationService.login(user).then(response => {
			const token = response.data.token;
			const user = jwt.decode(token);
			login({token, user});
			Api.defaults.headers['Authorization'] = 'Bearer ' + token;
			history.push("/");
		}).catch(error => {
			console.error(error);
			if (error.response.data.code === 401) {
				alertState.set("danger", "Wrong email or password.");
			} else {
				alertState.set("danger", error.response.data.statusMsg);
			}
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
			<div className="card-body px-5 py-4">
				<Alert/>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						className="form-control"
						name="email"
						id="email"
						placeholder="Email"
						value={user.email}
						onChange={onChange}
						autoFocus
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						className="form-control"
						name="password"
						id="password"
						placeholder="Password"
						value={user.password}
						onChange={onChange}
						required
					/>
				</div>
				<div className="text-center">
					<button type="submit" className="btn btn-primary">Login</button>
				</div>
				<SignInLinks/>
			</div>
		</form>
	);
};

export default SignInForm;