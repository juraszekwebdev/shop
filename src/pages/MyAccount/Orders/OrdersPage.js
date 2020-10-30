import React, {useEffect, useState} from 'react';
import {MyAccountNavigation} from "../index";
import OrdersList from "./OrdersList";
import {OrderService} from "../../../service/order.service";
import Loading from "../../../components/Loading";

const OrdersPage = () => {
	const [list, setList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		OrderService.list({}).then(response => {
			setList(response.data.data);
			setIsLoading(false);
		}).catch(error => {
			console.error(error);
			setIsLoading(false);
		})
	}, []);

	return (
		<div className="container">
			<div className="row">
				<MyAccountNavigation/>
				{isLoading ? <Loading /> : <OrdersList list={list}/>}
			</div>
		</div>
	);
};

export default OrdersPage;