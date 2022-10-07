import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";

const store = configureStore({
	reducer: {
		user: userReducer,
		cart: cartReducer,
	},
});

export default store;
