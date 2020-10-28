import React, {useEffect} from 'react';
import {useLocation} from "react-router";
import Hero from "../components/Hero";
import PageTitle from "../components/PageTitle";

const Page = props => {
	useEffect(() => {
		document.title = props.title;
	}, [props.title]);

	const PageComponent = props.component;
	const location = useLocation();
	return (
		<div className="page-wrapper mb-5">
			{location.pathname === "/" ? <Hero/> : <PageTitle title={props.title}/>}
			<PageComponent/>
		</div>
	)
};

export default Page;