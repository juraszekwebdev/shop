import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./assets/scss/main.scss";
import {BrowserRouter} from "react-router-dom";
import {UserStateProvider} from "./store/stores/user.store";
import {AlertStateProvider} from "./store/stores/alert.store";
import {CartStateProvider} from "./store/stores/cart.store";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
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
