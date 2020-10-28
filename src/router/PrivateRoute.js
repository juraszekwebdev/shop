import React, {useContext} from 'react';
import {Redirect, Route} from "react-router";
import {UserStore} from "../store/stores/user.store";

const PrivateRoute = ({...rest}) => {
	const {isAuthenticated} = useContext(UserStore);
	return (
		<Route
			{...rest}
			render={isAuthenticated ? rest.render : () => <Redirect to="/sign-in"/>}
		/>
	)
};

export default PrivateRoute;