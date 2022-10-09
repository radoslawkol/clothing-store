import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const dataProducts = [
	{
		id: "0",
		title: "Blue Jeans",
		image:
			"https://cdn.pixabay.com/photo/2018/09/12/21/08/jeans-3673241_960_720.jpg",
		description: "Nice blue jeans. ....",
		categories: ["trousers", "jeans"],
		size: "M",
		color: "blue",
		inStock: true,
		quantity: 1,
		price: 20,
	},
	{
		id: "1",
		title: "White Jeans",
		image:
			"https://cdn.pixabay.com/photo/2018/09/12/21/08/jeans-3673241_960_720.jpg",
		description: "Nice white jeans. ....",
		categories: ["trousers", "jeans"],
		size: "M",
		color: "blue",
		inStock: true,
		quantity: 1,
		price: 30,
	},
];

const initialState = {
	cartItems: [],
	amount: 0,
	totalPrice: 0,
	isLoading: true,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		removeItem: (state, action) => {
			const itemId = action.payload;
			state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
		},
		increase: (state, { payload }) => {
			console.log(payload);
			const cartItem = state.cartItems.find((item) => item.id === payload.id);
			console.log(cartItem);
			cartItem.quantity += 1;
		},
		decrease: (state, { payload }) => {
			const cartItem = state.cartItems.find((item) => item.id === payload.id);
			if (cartItem.quantity === 1) {
				state.cartItems = state.cartItems.filter(
					(item) => item.id !== payload.id
				);
			} else {
				cartItem.quantity -= 1;
			}
		},
		calculateTotals: (state) => {
			let amount = 0;
			let total = 0;

			state.cartItems.forEach((item) => {
				amount += item.amount;
				total += item.amount * item.price;
			});

			state.amount = amount;
			state.totalPrice = total;
		},
		addCartToCookies: (state) => {
			Cookies.set("cart", JSON.stringify(state));
		},
		getCartFromCookies: (state) => {
			return Cookies.get("cart") && JSON.parse(Cookies.get("cart"));
		},
	},
});

export const {
	removeItem,
	increase,
	decrease,
	calculateTotals,
	addCartToCookies,
	getCartFromCookies,
} = cartSlice.actions;

export default cartSlice.reducer;
