import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
	cartItems: [],
	amount: 0,
	totalPrice: 0,
	totalCost: 0,
	deliveryCost: 6,
	discount: 0,
	isLoading: true,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, { payload }) => {
			const cartItem = state.cartItems.find((item) => item._id === payload._id);

			if (cartItem && cartItem.size === payload.size) {
				cartItem.quantity += 1;
			} else {
				state.cartItems.push(payload);
			}
		},

		removeItem: (state, { payload }) => {
			state.cartItems = state.cartItems.filter(
				(item) => item.index !== payload.index
			);
		},
		increase: (state, { payload }) => {
			console.log(payload);
			const cartItem = state.cartItems.find(
				(item) => item.index === payload.index
			);
			console.log(cartItem);
			cartItem.quantity += 1;
		},
		decrease: (state, { payload }) => {
			const cartItem = state.cartItems.find(
				(item) => item.index === payload.index
			);
			if (cartItem.quantity === 1) {
				state.cartItems = state.cartItems.filter(
					(item) => item.index !== payload.index
				);
			} else {
				cartItem.quantity -= 1;
			}
		},
		calculateTotals: (state) => {
			let amount = 0;
			let total = 0;
			const deliveryCost = 6;

			state.cartItems.forEach((item) => {
				amount += item.quantity;
				total += item.quantity * item.price;
			});

			state.totalPrice = total;
			state.amount = amount;
			if (total !== 0) {
				state.totalCost = total + deliveryCost;
			}
		},
		addCartToCookies: (state) => {
			Cookies.set("cart", JSON.stringify(state));
		},
		getCartFromCookies: (state) => {
			if (state.cartItems.length < 1) {
				return Cookies.get("cart") && JSON.parse(Cookies.get("cart"));
			}
		},
	},
});

export const {
	addItem,
	removeItem,
	increase,
	decrease,
	calculateTotals,
	addCartToCookies,
	getCartFromCookies,
} = cartSlice.actions;

export default cartSlice.reducer;
