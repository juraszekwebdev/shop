import Api from "../api/Api";

export const ProductService = {
	list() {
		return Api.post("api/unauthorized/product/list");
	},
	addToCart(payload) {
		return Api.post("api/unauthorized/product/addToCart", payload);
	},
	removeFromCart(payload) {
		return Api.post("api/unauthorized/product/removeFromCart", payload);
	},
	changeQuantity(payload) {
		return Api.post("api/unauthorized/product/changeQuantity", payload);
	},
	find(payload) {
		return Api.post("api/unauthorized/product/find", payload);
	},
}