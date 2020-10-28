import React, {useEffect, useState} from 'react';
import ProductsTable from "../../../Checkout/ProductsTable";
import {NavLink, useParams} from "react-router-dom";
import {OrderService} from "../../../../service/order.service";
import Loading from "../../../../components/Loading";

const OrderPage = props => {
	const [order, setOrder] = useState(null);
	const params = useParams();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		OrderService.find({id: params.id}).then(response => {
			setOrder(response.data.data.data);
			setIsLoading(false);

		}).catch(error => {
			console.error(error);
			setIsLoading(false);
		});

	}, [])


	return (
		<div className="container">
			<div className="card">
				<div className="card-body">
					{isLoading ? <Loading/> :
						order !== null ?
							<>
								<h3 className="h3">Order ID: #{order.orderId}</h3>
								<hr/>
								<h5 className="h5">Customer data</h5>
								<hr/>
								<ul className="list-unstyled">
									<li>First name: <strong>{order.customerData.personalData.firstName}</strong></li>
									<li>Last name: <strong>{order.customerData.personalData.lastName}</strong></li>
									<li>Contact phone: <strong>{order.customerData.personalData.phoneNumber}</strong></li>
								</ul>
								<hr/>
								<h5 className="h5">Delivery address</h5>
								<hr/>
								<address>
									<strong>{order.customerData.personalData.firstName} {order.customerData.personalData.lastName}</strong><br/>
									{order.customerData.address.street} {order.customerData.address.houseNumber} {order.customerData.address.apartmentNumber}<br/>
									{order.customerData.address.city} {order.customerData.address.postalCode}
								</address>
								<hr/>
								<h5 className="h5">Products</h5>
								<hr/>
								<ProductsTable products={order.products}/>
								<div className="text-center">
									<NavLink to="/my-account/orders" className="btn btn-lg btn-primary">Go to orders</NavLink>
								</div>
							</> : "Order not found"
					}


				</div>
			</div>
		</div>
	);
};

export default OrderPage;