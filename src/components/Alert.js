import React, {useContext, useEffect} from 'react';
import {AlertStore} from "../store/stores/alert.store";

const Alert = () => {
	const alertState = useContext(AlertStore);

	useEffect(() => {
		alertState.clear();

		return () => {
			alertState.clear();
		}
	}, [])

	return (
		<>
			{
				alertState.alert.status ? <div className={"alert alert-" + alertState.alert.status}>
					{alertState.alert.message}
				</div> : <></>
			}
		</>
	);
};

export default Alert;