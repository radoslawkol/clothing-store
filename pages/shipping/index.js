import React from "react";
import AddressForm from "../../components/Shipping/AddressForm";
import ShippingCart from "../../components/Shipping/ShippingCart";

export default function ShippingPage() {
	return (
		<div className='p-2'>
			<AddressForm />
			<ShippingCart />
		</div>
	);
}
