import React from 'react';
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Loading = () => {
	return (
		<div className="loading m-auto text-center">
			<FontAwesomeIcon icon={faSpinner} spin={true} size="2x" />
			<p className="mt-2">Loading...</p>
		</div>
	);
};

export default Loading;