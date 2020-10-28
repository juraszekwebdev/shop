import {NavLink} from "react-router-dom";
import React, {useContext} from "react";
import {UserStore} from "../../store/stores/user.store";

const UserMenu = props => {
	return (
		<div className="user-menu d-inline-block">
			<NavLink to="/sign-up" className="mr-1 btn btn-secondary text-decoration-none">Create an account</NavLink>
			<NavLink to="/sign-in" className="btn btn-primary text-decoration-none">Sign in</NavLink>
		</div>
	)
}

const UserLogged = props => {
	const {logout} = useContext(UserStore);
	return (
		<div className="user-menu d-inline-block">
			<NavLink to="/my-account" className="mr-1 btn btn-secondary text-decoration-none">My account</NavLink>
			<button onClick={logout} className="btn btn-secondary text-decoration-none">Logout</button>
		</div>
	)
}

export {
	UserMenu,
	UserLogged
}