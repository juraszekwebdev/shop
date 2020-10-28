import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from "react-router";
import {OrderService} from "../../service/order.service";
import ProductsTable from "./ProductsTable";
import {NavLink} from "react-router-dom";
import {CartStore} from "../../store/stores/cart.store";

const CheckoutCompletePage = () => {
	const history = useHistory();
	const {clear} = useContext(CartStore);
	const [orderData, setOrderData] = useState(null);

	useEffect(() => {
		if(history.location.hash === "") {
			setOrderData(history.location.state.orderData);
		} else {
			OrderService.find({id: history.location.hash.split("#")[1]}).then(response => {
				setOrderData({
					...response.data.data.data
				});
				clear();
			}).catch(error => {
				console.error(error);
			});
		}
	}, []);

	return (
		<div className="container">
			<div className="card">
				<div className="card-body">
					{
						orderData !== null ?
							<>
								<h3 className="h3">Thank you! Order ID: #{orderData.orderId}</h3>
								<hr />
								<h5 className="h5">Delivery address</h5>
								<hr />
								<address>
									First name: <strong>{orderData.customerData.personalData.firstName}</strong><br/>
									Last name: <strong>{orderData.customerData.personalData.lastName}</strong><br/>
									Contact phone: <strong>{orderData.customerData.personalData.phoneNumber}</strong><br/>
									<br/>
									<strong>{orderData.customerData.personalData.firstName} {orderData.customerData.personalData.lastName}</strong><br/>
									{orderData.customerData.address.street} {orderData.customerData.address.houseNumber} {orderData.customerData.address.apartmentNumber}<br/>
									{orderData.customerData.address.city} {orderData.customerData.address.postalCode}
								</address>
								<hr />
								<h5 className="h5">Products</h5>
								<hr />
								<ProductsTable products={orderData.products} />
								<div className="text-center">
									<NavLink to="/products" className="btn btn-lg btn-primary">Continue shopping</NavLink>
								</div>
							</> :
							"OrderPage not found"
					}
				</div>
			</div>
		</div>
	);
};

export default CheckoutCompletePage;