import { createSlice } from "@reduxjs/toolkit";

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
];

const initialState = {
	cartItems: dataProducts,
	count: 0,
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
			const cartItem = state.cartItems.find((item) => item.id === payload.id);
			cartItem.quantity += 1;
		},
		decrease: (state, { payload }) => {
			const cartItem = state.cartItems.find((item) => item.id === payload.id);
			cartItem.quantity -= 1;
		},
		calculateTotals: (state) => {
			let quantity = 0;
			let total = 0;

			state.cartItems.forEach((item) => {
				quantity += item.quantity;
				total += item.quantity * item.price;
			});

			state.quantity = quantity;
			state.totalPrice = total;
		},
	},
});

export const { removeItem, increase, decrease, calculateTotals } =
	cartSlice.actions;

export default cartSlice.reducer;
