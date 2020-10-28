import React, {createContext, useEffect, useReducer} from "react";
import AlertReducer from "../reducers/alert.reducer";

const initialState = {
	status: "",
	message: "",
}

const AlertStore = createContext(initialState);
const { Provider } = AlertStore;

const AlertStateProvider = ({children}) => {
	const [state, dispatch] = useReducer(AlertReducer, initialState);

	useEffect(() => {
		clear();

		return () => {
			clear();
		}
	}, []);

	const set = (status, message) => {
		dispatch({
			type: "SET",
			payload: {
				status,
				message
			}
		});
	}

	const clear = () => {
		dispatch({
			type: "CLEAR"
		});
	}

	return (
		<Provider value={{alert: state, clear, set}}>
			{children}
		</Provider>
	)
};

export { AlertStore, AlertStateProvider }