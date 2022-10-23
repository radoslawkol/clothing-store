import React from "react";
import AddedProducts from "./AddedProducts";
import CheckoutHeader from "./CheckoutHeader";
import Summary from "./Summary";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
	calculateTotals,
	addCartToCookies,
	getCartFromCookies,
} from "../../reducers/cartReducer";

export default function Checkout() {
	const { cartItems, totalPrice } = useSelector((store) => store.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCartFromCookies());
	}, []);

	useEffect(() => {
		dispatch(calculateTotals());
		dispatch(addCartToCookies());
		if (cartItems.length > 0) {
		}
	}, [cartItems]);

	return (
		<div className='lg:flex contentWithoutMenuHeight'>
			<div className='lg:w-[70%]'>
				<CheckoutHeader />
				<AddedProducts cartItems={cartItems} />
			</div>

			<Summary totalPrice={totalPrice} />
		</div>
	);
}
