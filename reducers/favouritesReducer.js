import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
};

const favouritesSlice = createSlice({
	name: "favourites",
	initialState,
	reducers: {
		addFavouritesFromDB: (state, { payload }) => {
			return { products: payload };
		},
		addFavourite: (state, { payload }) => {
			const products = [...state.products, payload];
			return { ...state, products };
		},
		removeFavourite: (state, { payload }) => {
			const updatedFavourites = state.products.filter(
				(fav) => fav._id !== payload
			);
			return { ...state, products: updatedFavourites };
		},
	},
});

export const { addFavourite, removeFavourite, addFavouritesFromDB } =
	favouritesSlice.actions;

export default favouritesSlice.reducer;
