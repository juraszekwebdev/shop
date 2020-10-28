import Api from "../api/Api";

export const OrderService = {
	add(payload) {
		return Api.post("api/authorized/order/add", payload);
	},
	list(payload) {
		return Api.post("api/authorized/order/list", payload);
	},
	find(payload) {
		return Api.post("api/authorized/order/find", payload);
	},
}