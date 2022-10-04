import Cookies from "js-cookie";

const userReducer = (
	state = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null,
	action
) => {
	switch (action.type) {
		case "LOGIN":
			return action.payload;

		case "REGISTER":
			return action.payload;
		default:
			return state;
	}
};

export default userReducer;
