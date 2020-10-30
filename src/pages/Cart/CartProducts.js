import React, {useContext, useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner, faTrash} from "@fortawesome/free-solid-svg-icons";
import {ProductService} from "../../service/product.service";
import _ from "lodash";
import {AlertStore} from "../../store/stores/alert.store";
import {CartStore} from "../../store/stores/cart.store";
import Loading from "../../components/Loading";
import config from "../../api/config";

const CartProducts = () => {
	const {cart, remove, changeProductQuantity} = useContext(CartStore);
	const [list, setList] = useState([]);
	const [currentItemProcessing, setCurrentItemProcessing] = useState(-1);
	const [isLoading, setIsLoading] = useState(false);

	const alertState = useContext(AlertStore);

	useEffect(() => {
		setIsLoading(true);
		ProductService.list({}).then(response => {
			setList(response.data.data);
			setIsLoading(false);
		}).catch(error => {
			console.error(error);
			setIsLoading(false);
		});

	}, [])

	const handleRemoveFromCart = (productId, quantity) => {
		setCurrentItemProcessing(productId);
		ProductService.removeFromCart({id: productId, quantity}).then(response => {
			remove(productId);
			alertState.set("success", "Product removed from cart");
			setCurrentItemProcessing(-1);
		}).catch(error => {
			console.error(error);
			alertState.set("success", "Unexpected error. Try again.");
			setCurrentItemProcessing(-1);
		});
	}

	const onChangeQuantity = (e, productId) => {
		const {value} = e.target;
		const product = _.find(list, {id: productId});
		setCurrentItemProcessing(productId);

		if (value > product.quantity) {
			alertState.set("danger", "Product is not available in this quantity");
			e.preventDefault();
		} else {
			ProductService.changeQuantity({
				id: productId,
				quantity: product.quantityLeft - (value - 1)
			}).then(response => {
				changeProductQuantity(productId, value);
				setCurrentItemProcessing(-1);
			}).catch(error => {
				console.error(error);
				setCurrentItemProcessing(-1);
			})
		}
	}

	return (
		<React.Fragment>
			{
				isLoading ? <Loading /> :
					<table className="table table-striped cart-table">
						<thead>
						<tr>
							<th>ID</th>
							<th>Product</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Actions</th>
						</tr>
						</thead>
						<tbody>
						{list.length > 0 && cart.map((item, index) => {
							const product = _.find(list, {id: item.id});

							return (
								<tr key={index}>
									<td>{item.id}</td>
									<td>
										<div className="d-flex align-items-center">
											<div className="image w-25">
												<img src={config.apiHost + item.image} alt={item.name}/>
											</div>
											<div className="name">
												{item.name}
											</div>
										</div>
									</td>
									<td>$ {(item.price * item.quantity).toFixed(2)}</td>
									<td>
										<input
											type="number"
											className="form-control"
											min={1}
											max={product.quantity}
											name="quantity"
											value={item.quantity}
											disabled={currentItemProcessing === item.id}
											onChange={(e) => onChangeQuantity(e, item.id)}
										/>
									</td>
									<td>
										<button className="btn btn-danger"
										        type="button"
										        onClick={() => handleRemoveFromCart(item.id, item.quantity)}
										        disabled={currentItemProcessing === item.id}
										>
											{
												currentItemProcessing === item.id ? <FontAwesomeIcon icon={faSpinner} spin={true} /> : <FontAwesomeIcon icon={faTrash}/>
											}
										</button>
									</td>
								</tr>
							)
						})}
						</tbody>
					</table>
			}

		</React.Fragment>

	);
};

export default CartProducts;