import Api from "../api/Api";

export const AuthenticationService = {
	login(payload) {
		return Api.post("auth/login", payload);
	},
	register(payload) {
		return Api.post("auth/register", payload);
	},
	changePassword(payload) {
		return Api.post("api/authorized/changeUserPassword", payload);
	},
	editAddress(payload) {
		return Api.post("api/authorized/editUserAddress", payload);
	},
	editPersonalData(payload) {
		return Api.post("api/authorized/editUserPersonalData", payload);
	}
}