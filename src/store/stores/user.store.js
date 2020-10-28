import React, {createContext, useEffect, useReducer} from "react";
import UserReducer from "../reducers/user.reducer";
import {useHistory} from "react-router";
import jwt from "jsonwebtoken";
import jwtKey from "../../api/jwtKey";

const initialState = {
	isAuthenticated: !!localStorage.getItem("token"),
	token: localStorage.getItem("token"),
	user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
}

const UserStore = createContext(initialState);
const { Provider } = UserStore;

const UserStateProvider = ({children}) => {
	const [state, dispatch] = useReducer(UserReducer, initialState);
	const history = useHistory();

	useEffect(() => {
		const token = localStorage.getItem("token");
		try {
			const user = jwt.verify(token, jwtKey);
			dispatch({
				type: "LOGIN",
				payload: {
					user,
					token
				}
			});
		} catch (err) {
			if (err.name === "TokenExpiredError") {
				dispatch({
					type: "LOGOUT"
				});
				history.push("/sign-in");
			}
		}

	}, [history]);

	const login = payload => {
		dispatch({
			type: "LOGIN",
			payload
		});
	}

	const logout = () => {
		dispatch({
			type: "LOGOUT"
		});
	}

	return (
		<Provider value={{user: state.user, isAuthenticated: state.isAuthenticated, login, logout}}>
			{children}
		</Provider>
	)
};

export { UserStore, UserStateProvider }