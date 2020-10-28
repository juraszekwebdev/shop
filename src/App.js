import React from 'react';
import Router from "./router/Router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="app">
			<Header/>
			<Router/>
			<Footer/>
		</div>
	);
}

export default App;
