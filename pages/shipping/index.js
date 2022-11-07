import React from "react";
import AddressForm from "../../components/Shipping/AddressForm";
import ShippingCart from "../../components/Shipping/ShippingCart";

export default function ShippingPage() {
	return (
		<div className='p-2 sm:flex  justify-center'>
			<div className='lg:flex lg:w-full lg:justify-center lg:gap-6 xl:gap-20 contentWithoutMenuHeight'>
				<AddressForm />
				<ShippingCart />
			</div>
		</div>
	);
}
