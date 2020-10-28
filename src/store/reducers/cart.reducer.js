import _ from "lodash";

const CartReducer = (state, action) => {
	const {type, payload} = action;
	let findProduct = null;

	switch (type) {
		case 'ADD':
			findProduct = _.find(state.products, {id: payload.product.id});
			if (findProduct) {
				findProduct.quantity += payload.quantity;
			} else {
				state.products.push({
					...payload.product,
					quantity: payload.quantity
				});
			}
			localStorage.setItem("cart", JSON.stringify(state));
			return {
				...state,
				products: state.products
			};
		case 'REMOVE':
			const index = _.findIndex(state.products, {id: payload.productId});
			state.products.splice(index, 1);
			localStorage.setItem("cart", JSON.stringify(state));
			return {
				...state,
				products: state.products
			};
		case 'CHANGE_QUANTITY':
			findProduct = _.find(state.products, {id: payload.productId});
			findProduct.quantity = Number(payload.quantity);
			localStorage.setItem("cart", JSON.stringify(state));
			return {
				...state,
				products: state.products
			};
		case 'CLEAR':
			localStorage.removeItem("cart");
			return [];
		default:
			return state;
	}
};

export default CartReducer;