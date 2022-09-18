import React from "react";
import AddedProducts from "./AddedProducts";
import CheckoutHeader from "./CheckoutHeader";
import Summary from "./Summary";

export default function Checkout() {
	return (
		<div className='lg:flex contentWithoutMenuHeight'>
			<div className='lg:w-[70%]'>
				<CheckoutHeader />
				<AddedProducts />
			</div>

			<Summary />
		</div>
	);
}
