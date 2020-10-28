import React, {useContext, useState} from 'react';
import generateId from "../../helpers/generateId";
import {OrderService} from "../../service/order.service";
import {useHistory} from "react-router";
import EditAddressForm from "../MyAccount/EditAddress/EditAddressForm";
import {UserStore} from "../../store/stores/user.store";
import {CartStore} from "../../store/stores/cart.store";

const CheckoutForm = () => {
	const {user} = useContext(UserStore);
	const [checkoutData, setCheckoutData] = useState({
		deliveryMethod: "",
		paymentMethod: "",
	});
	const {cart, getTotals, clear} = useContext(CartStore);
	const history = useHistory();

	const completeOrder = () => {
		const products = cart;
		const totals = getTotals();
		const orderId = generateId(8);
		const orderData = {
			products,
			totals,
			checkoutData,
			customerData: {
				address: user.address,
				personalData: user.personalData
			},
			orderId
		};
		OrderService.add({
			orderData,
		}).then(response => {
			clear();
			history.push(`/checkout-complete#${response.data.data}`, {
				orderData
			});
		}).catch(error => {
			console.log(error);
		});
	}

	const onChange = e => {
		const {name, value} = e.target;
		setCheckoutData({
			...checkoutData,
			[name]: value
		})
	}

	const onSubmit = e => {
		e.preventDefault();
		completeOrder();
	}

	return (
		<>
			{user.address === null && <EditAddressForm />}
			<div className="card">
				<div className="card-body">
					<div className="row">
						<div className="col-lg-6">
							{
								user.address !== null &&
								<>
									<h5 className="h5">Delivery address</h5>
									<hr />
									<address>
										<strong>{user.personalData.firstName} {user.personalData.lastName}</strong><br/>
										{user.address.street} {user.address.houseNumber} {user.address.apartmentNumber}<br/>
										{user.address.city} {user.address.postalCode}<br/>
										Contact phone: <strong>{user.personalData.phoneNumber}</strong>
									</address>
								</>
							}
						</div>
					</div>
					<form onSubmit={onSubmit}>
						<fieldset disabled={user.address === null}>
							<div className="row mt-3">
								<div className="col-lg-6">
									<h5 className="h5">Delivery method</h5>
									<hr/>
									<div className="form-check mt-3">
										<input
											className="form-check-input"
											type="radio"
											name="deliveryMethod"
											id="courier"
											value="courier"
											onChange={onChange}
											required
										/>
										<label
											className="form-check-label"
											htmlFor="courier">
											<strong>Courier</strong><br/>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											</p>
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="deliveryMethod"
											id="pickup"
											value="pickup"
											onChange={onChange}
										/>
										<label
											className="form-check-label"
											htmlFor="pickup">
											<strong>Pickup</strong><br/>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											</p>
										</label>
									</div>
								</div>
								<div className="col-lg-6">
									<h5 className="h5">Payment method</h5>
									<hr/>

									<div className="form-check mt-3">
										<input
											className="form-check-input"
											type="radio"
											name="paymentMethod"
											id="paypal"
											value="paypal"
											onChange={onChange}
											required
										/>
										<label
											className="form-check-label"
											htmlFor="paypal">
											<strong>Paypal</strong><br/>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											</p>
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="paymentMethod"
											id="dotpay"
											value="dotpay"
											onChange={onChange}

										/>
										<label
											className="form-check-label"
											htmlFor="dotpay">
											<strong>Dotpay</strong><br/>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											</p>
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="paymentMethod"
											id="bank_transfer"
											value="bank_transfer"
											onChange={onChange}
										/>
										<label
											className="form-check-label"
											htmlFor="bank_transfer">
											<strong>Bank transfer</strong><br/>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											</p>
										</label>
									</div>
								</div>
							</div>
							<div className="text-right mt-5">
								<button type="submit" className="btn btn-primary">
									Complete order
								</button>
							</div>
						</fieldset>
					</form>
				</div>
			</div>
		</>
	);
};

export default CheckoutForm;