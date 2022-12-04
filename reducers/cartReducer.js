import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
	cartItems: [],
	amount: 0,
	totalPrice: 0,
	totalCost: 0,
	deliveryCost: 6,
	discount: 0,
	discountCode: "",
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
			localStorage.setItem("cart", JSON.stringify(state));
		},

		removeItem: (state, { payload }) => {
			state.cartItems = state.cartItems.filter(
				(item) => item.index !== payload.index
			);
			localStorage.setItem("cart", JSON.stringify(state));
		},
		increase: (state, { payload }) => {
			const cartItem = state.cartItems.find(
				(item) => item.index === payload.index
			);

			cartItem.quantity += 1;
			localStorage.setItem("cart", JSON.stringify(state));
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
			localStorage.setItem("cart", JSON.stringify(state));
		},
		calculateTotals: (state) => {
			let amount = 0;
			let total = 0;
			const deliveryCost = state.deliveryCost;

			state.cartItems.forEach((item) => {
				amount += item.quantity;
				total += item.quantity * item.price;
			});

			state.totalPrice = total;
			state.amount = amount;
			if (total !== 0) {
				state.totalCost = total - total * state.discount + deliveryCost;
			}
			if (state.cartItems.length === 0) {
				state.totalCost = 0;
			}
			localStorage.setItem("cart", JSON.stringify(state));
		},
		calculateDiscount: (state, { payload }) => {
			console.log(payload);
			state.discountCode = payload.discountCode;
			const totalPrice = state.totalPrice;
			state.discount = payload.discount / 100;
			state.totalCost =
				totalPrice - (totalPrice * payload.discount) / 100 + state.deliveryCost;
			localStorage.setItem("cart", JSON.stringify(state));
		},
		addCartItems: (state, { payload }) => {
			return payload;
		},
		resetCart: (state) => {
			return initialState;
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
	calculateDiscount,
	addCartItems,
	resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
