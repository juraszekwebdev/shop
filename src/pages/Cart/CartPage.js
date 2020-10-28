import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import CartProducts from "./CartProducts";
import Alert from "../../components/Alert";
import {UserStore} from "../../store/stores/user.store";
import {CartStore} from "../../store/stores/cart.store";

const CartPage = () => {
	const {getProductsCount, getTotals} = useContext(CartStore);
	const {isAuthenticated} = useContext(UserStore);

	return (
		<div className="container">
			<Alert/>
			<div className="card">
				<div className="card-body">
					{
						getProductsCount() > 0 ? <>
							<CartProducts/>
							<div className="my-3 text-right">
								<h5 className="h5">Total: $ {getTotals()}</h5>
							</div>
							<div className="text-right">
								{
									isAuthenticated ? <NavLink to="/checkout" className="btn btn-primary btn-lg">
											Next
										</NavLink> :
										<NavLink to="/sign-in" className="btn btn-primary btn-lg">
											Login to checkout
										</NavLink>
								}
							</div>
						</> : "No products in cart"
					}

				</div>
			</div>
		</div>
	);
};

export default CartPage;