import React, {useEffect, useState} from 'react';
import Product from "./Product";
import {ProductService} from "../service/product.service";
import _ from "lodash";
import Loading from "./Loading";

const ProductsList = () => {
	const [list, setList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		ProductService.list().then(response => {
			setList(response.data.data);
			setIsLoading(false);
		}).catch(error => {
			console.error(error);
			setIsLoading(false);
		})
	}, []);

	const getList = () => {
		return list.length > 0 ? list : null;
	}

	const setProductQuantity = (productId, quantity) => {
		const index = _.findIndex(list, {id: productId});
		list[index].quantity = Number(list[index].quantity) - quantity;
		setList(list);
	}

	return (
		<div className="products-list">
			<div className="container">
				<div className="row">
					{
						isLoading ? <Loading /> : getList() && getList().map((product, index) => {
							return <Product key={index} product={product} setProductQuantity={setProductQuantity}/>
						})
					}

				</div>
			</div>
		</div>
	);
};

export default ProductsList;