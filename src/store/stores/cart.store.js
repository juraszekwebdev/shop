import React, {createContext, useReducer} from "react";
import CartReducer from "../reducers/cart.reducer";
import _ from "lodash";

const cart = localStorage.getItem("cart");
const initialState = {
	products: cart ? JSON.parse(cart)['products'] : [],
}

const CartStore = createContext(initialState);
const { Provider } = CartStore;

const CartStateProvider = ({children}) => {
	const [state, dispatch] = useReducer(CartReducer, initialState);

	const add = (product, quantity) => {
		dispatch({
			type: "ADD",
			payload: {
				product,
				quantity
			}
		})
	}

	const remove = productId => {
		dispatch({
			type: "REMOVE",
			payload: {
				productId
			}
		});
	}

	const changeProductQuantity = (productId, quantity) => {
		dispatch({
			type: "CHANGE_QUANTITY",
			payload: {
				productId,
				quantity
			}
		});
	}

	const getProductsCount = () => {
		return state.products ? state.products.length : 0;
	}

	const getTotals = () => {
		let totals = 0.00;
		_.forEach(state.products, product => {
			totals += (parseFloat(product.price) * parseInt(product.quantity));
		});

		return totals.toFixed(2);
	}

	const clear = () => {
		dispatch({
			type: "CLEAR",
		})
	}

	return (
		<Provider value={{cart: state.products, add: (product, quantity) => add(product, quantity), remove, clear, changeProductQuantity, getProductsCount, getTotals}}>
			{children}
		</Provider>
	)
};

export { CartStore, CartStateProvider }