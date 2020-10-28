import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from "react-router";
import CheckoutForm from "./CheckoutForm";
import {CartStore} from "../../store/stores/cart.store";

const CheckoutPage = () => {
	const {getProductsCount} = useContext(CartStore);

	const history = useHistory();

	useEffect(() => {
		if (getProductsCount() < 1) {
			history.push("/products");
		}
	}, []);

	return (
		<div className="container">
			<CheckoutForm />
		</div>
	)
};

export default CheckoutPage;