import React from "react";
import AddressForm from "../../components/Shipping/AddressForm";
import ShippingCart from "../../components/Shipping/ShippingCart";
import axios from "axios";
import { useState } from "react";

export default function ShippingPage() {
	const [shippingFormData, setShippingFormData] = useState({});
	const addOrderHandler = async () => {
		try {
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`,
				{
					products: cartItems,
				}
			);
		} catch (err) {
			console.log(err.message);
		}
	};
	return (
		<div className='p-2 sm:flex  justify-center'>
			<div className='lg:flex lg:w-full lg:justify-center lg:gap-6 xl:gap-20 contentWithoutMenuHeight'>
				<AddressForm setShippingFormData={setShippingFormData} />
				<ShippingCart addOrderHandler={addOrderHandler} />
			</div>
		</div>
	);
}
