const apiHostDevelopment = "http://127.0.0.1:8000/";
const apiHostProduction = "https://shop-api.herokuapp.com/";

export default {
	apiHost: process.env.NODE_ENV === "development" ? apiHostDevelopment : apiHostProduction,
}