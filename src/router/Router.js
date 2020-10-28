import React from 'react';
import routes from "./routes";
import {Route, Switch} from "react-router";
import Page from "./Page";
import PrivateRoute from "./PrivateRoute";

const Router = props => {
	return (
		<Switch>
			{routes.map((route, i) => {
				if (!route.requiresAuth) {
					return (
						<Route
							key={i}
							path={route.path}
							exact={route.exact}
							render={props => <Page {...props} component={route.component} title={route.title}/>}
						/>
					)
				} else {
					return (
						<PrivateRoute
							key={i}
							path={route.path}
							exact={route.exact}
							render={props => <Page {...props} component={route.component} title={route.title}/>}
						/>
					)
				}

			})}
		</Switch>
	)
};

export default Router;