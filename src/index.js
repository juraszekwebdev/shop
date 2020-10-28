import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "./assets/scss/main.scss";
import {BrowserRouter} from "react-router-dom";
import {UserStateProvider} from "./store/stores/user.store";
import {AlertStateProvider} from "./store/stores/alert.store";
import {CartStateProvider} from "./store/stores/cart.store";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter basename="/">
			<UserStateProvider>
				<AlertStateProvider>
					<CartStateProvider>
						<CartStateProvider>
							<App/>
						</CartStateProvider>
					</CartStateProvider>
				</AlertStateProvider>
			</UserStateProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
