import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import favouritesReducer from "./favouritesReducer";

const store = configureStore({
	reducer: {
		user: userReducer,
		cart: cartReducer,
		favourites: favouritesReducer,
	},
});

export default store;
