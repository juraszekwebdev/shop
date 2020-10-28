const AlertReducer = (state, action) => {
	const {type, payload} = action;
	switch (type) {
		case 'SET':
			return {
				...state,
				status: payload.status,
				message: payload.message
			};
		case 'CLEAR':
			return {
				...state,
				status: "",
				message: ""
			};
		default:
			return state;
	}
};

export default AlertReducer;