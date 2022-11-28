import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import favouritesReducer from "./favouritesReducer";
import addressReducer from "./addressReducer";

const store = configureStore({
	reducer: {
		user: userReducer,
		cart: cartReducer,
		favourites: favouritesReducer,
		address: addressReducer,
	},
});

export default store;
