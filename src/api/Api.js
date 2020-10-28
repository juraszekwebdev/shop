import axios from "axios";
import config from "./config";

export default axios.create({
	baseURL: `${config.apiHost}`,
	headers: {
		'Authorization': `Bearer ${localStorage.getItem("token")}`,
		'Content-Type': 'application/json',
	}
});