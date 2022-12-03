import React from "react";
import AddedProducts from "./AddedProducts";
import CheckoutHeader from "./CheckoutHeader";
import Summary from "./Summary";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotals, addCartItems } from "../../reducers/cartReducer";

export default function Checkout() {
	const { cartItems, totalPrice, totalCost, deliveryCost, discount } =
		useSelector((store) => store.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("cart"));
		if (data) {
			dispatch(addCartItems(data));
		}
	}, []);

	useEffect(() => {
		dispatch(calculateTotals());
		if (cartItems.length > 0) {
		}
	}, [cartItems]);

	return (
		<div className='lg:flex contentWithoutMenuHeight'>
			<div className='lg:w-[70%]'>
				<CheckoutHeader products={cartItems.length} />
				<AddedProducts cartItems={cartItems} />
			</div>

			<Summary
				totalPrice={totalPrice}
				totalCost={totalCost}
				deliveryCost={deliveryCost}
				discount={discount}
				areProductsInBag={cartItems.length > 0 ? true : false}
			/>
		</div>
	);
}
