import React from 'react';

const PageTitle = ({title}) => {
	return (
		<div className="page-title my-5 text-center">
			<div className="container">
				<h1 className="h1">{title}</h1>
			</div>
		</div>
	);
};

export default PageTitle;