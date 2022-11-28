import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
	firstName: "",
	lastName: "",
	email: "",
	phoneNumber: "",
	streetAddress: "",
	apt: "",
	postalCode: "",
	state: "",
	city: "",
};

const addressSlice = createSlice({
	name: "address",
	initialState: Cookies.get("address")
		? JSON.parse(Cookies.get("address"))
		: initialState,
	reducers: {
		addAddress: (state, { payload }) => {
			Cookies.set("address", payload);
			return payload;
		},
	},
});

export const { addAddress } = addressSlice.actions;

export default addressSlice.reducer;
