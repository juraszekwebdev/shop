import React, {useContext, useState} from 'react';
import Alert from "./Alert";
import {ProductService} from "../service/product.service";
import {AlertStore} from "../store/stores/alert.store";
import {CartStore} from "../store/stores/cart.store";
import Loading from "./Loading";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import config from "../api/config";

console.log(config.apiHost)
const Product = props => {
	const {product, setProductQuantity} = props;
	const {add} = useContext(CartStore);
	const [quantity, setQuantity] = useState(1);
	const [currentProcessingItem, setCurrentProcessingItem] = useState(-1);
	const alertState = useContext(AlertStore);

	const handleAddToCart = (product, quantity) => {
		setCurrentProcessingItem(product.id);
		ProductService.addToCart({id: product.id, quantity}).then(response => {
			add(product, Number(quantity));
			setProductQuantity(product.id, Number(quantity));
			alertState.set("success", "Product added");
		}).catch(error => {
			console.error(error);
			alertState.set("danger", "Unexpected error. Try again.");
		});

		setTimeout(() => setCurrentProcessingItem(-1), 2000);
	}

	const onChangeQuantity = e => {
		const {value} = e.target;
		setQuantity(value);
	}

	const isProductAvailable = product => {
		return product.quantity > 0;
	}

	console.log(product.image);
	return (
		<div className="col-xl-3">
			<div className="product-wrapper text-darker bg-white">
				<div className="product-image">
					<img src={config.apiHost + product.image} alt=""/>
				</div>
				<div className="product-content text-center p-4">
					<div className="name">
						{product.name}
					</div>
					<div className="price">
						$ {product.price.toFixed(2)}
					</div>
					<div className="add-to-cart mt-4">
						{setCurrentProcessingItem === product.id && <Alert/>}
						{
							isProductAvailable(product) ? <div className="input-group">
								<input
									className="form-control"
									type="number"
									name="quantity"
									value={quantity}
									min={1}
									max={product.quantity}
									onChange={onChangeQuantity}
									id="button-addon1"
									disabled={!isProductAvailable(product) && currentProcessingItem === product.id}
								/>
								<div className="input-group-append">
									<button
										aria-describedby="button-addon1"
										type="button"
										onClick={() => handleAddToCart(product, quantity)}
										className="btn btn-sm btn-secondary"
										disabled={!isProductAvailable(product) || currentProcessingItem === product.id}
									>
										{
											currentProcessingItem === product.id ?
												<>
													<strong>ADD TO CART</strong> <FontAwesomeIcon icon={faSpinner} spin={true} />
												</> : <strong>ADD TO CART</strong>
										}
									</button>
								</div>
							</div> : <button
								disabled
								type="button"
								className="btn btn-secondary px-4"
							>
								<strong>UNAVAILABLE</strong>
							</button>
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;