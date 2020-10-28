const UserReducer = (state, action) => {
	const {type, payload} = action;

	switch (type) {
		case 'LOGIN':
			localStorage.setItem("user", JSON.stringify(payload.user));
			localStorage.setItem("token", payload.token);
			return {
				...state,
				isAuthenticated: true,
				user: payload.user,
				token: payload.token,
			};
		case 'LOGOUT':
			localStorage.removeItem("user");
			localStorage.removeItem("token");
			return {
				...state,
				isAuthenticated: false,
				user: null,
				token: null,
			};
		default:
			return state;
	}
};

export default UserReducer;