import React from "react";
import AddedProducts from "./AddedProducts";
import CheckoutHeader from "./CheckoutHeader";
import Summary from "./Summary";
import { useSelector } from "react-redux";

export default function Checkout() {
	const { cartItems, count, totalPrice } = useSelector((store) => store.cart);

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
