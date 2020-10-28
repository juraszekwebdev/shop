import React, {useContext, useState} from 'react';
import {AuthenticationService} from "../../service/authentication.service";
import Alert from "../../components/Alert";
import {SignUpLinks} from "../SignIn";
import {AlertStore} from "../../store/stores/alert.store";

const SignUpForm = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
		repeatPassword: "",
		personalData: {
			firstName: "",
			lastName: "",
			phoneNumber: "",
		}
	});
	const alertState = useContext(AlertStore);

	const onSubmit = e => {
		e.preventDefault();
		alertState.clear();
		AuthenticationService.register(user).then(response => {
			alertState.set("success", "Account has been created successfully!")
			setUser({
				email: "",
				password: "",
				repeatPassword: "",
				personalData: {
					firstName: "",
					lastName: "",
					phoneNumber: "",
				}

			});
		}).catch(error => {
			console.error(error);
			alertState.set("danger", error.response.data.statusMsg)
		})
	}

	const onChange = e => {
		const {name, value} = e.target;
		setUser({
			...user,
			[name]: value
		});
	}

	const onChangePersonalData = e => {
		const {name, value} = e.target;
		setUser({
			...user,
			personalData: {
				...user.personalData,
				[name]: value
			}
		});
	}

	return (
		<form onSubmit={onSubmit} className="card">
			<div className="card-body px-5 py-4">
				<Alert/>
				<div className="form-group">
					<label htmlFor="email">Email address</label>
					<input
						type="email"
						className="form-control"
						name="email"
						id="email"
						placeholder="Your email address"
						value={user.email}
						onChange={onChange}
						autoFocus
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="firstName">First name</label>
					<input
						type="text"
						className="form-control"
						name="firstName"
						id="firstName"
						placeholder="Your first name"
						value={user.personalData.firstName}
						onChange={onChangePersonalData}
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
						placeholder="Your last name"
						value={user.personalData.lastName}
						onChange={onChangePersonalData}
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
						placeholder="Your phone number"
						value={user.personalData.phoneNumber}
						onChange={onChangePersonalData}
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
						placeholder="Your password"
						value={user.password}
						onChange={onChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="repeatPassword">Repeat password</label>
					<input
						type="password"
						className="form-control"
						name="repeatPassword"
						id="repeatPassword"
						placeholder="Repeat your password"
						value={user.repeatPassword}
						onChange={onChange}
						required
					/>
				</div>
				<div className="text-center">
					<button type="submit" className="btn btn-primary">Create an account</button>
				</div>
				<SignUpLinks/>
			</div>
		</form>
	);
};

export default SignUpForm;