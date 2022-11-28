import React from "react";
import AddressForm from "../../components/Shipping/AddressForm";
import ShippingCart from "../../components/Shipping/ShippingCart";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { removeItem } from "../../reducers/cartReducer";

export default function ShippingPage() {
	const router = useRouter();
	const dispatch = useDispatch();
	const { user, cart, address } = useSelector((store) => store);
	const [isShippingFormValid, setIsShippingFormValid] = useState(false);

	const addOrderHandler = async () => {
		console.log(address);
		console.log(cart);
		try {
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`,
				{
					userId: user._id,
					products: cart.cartItems,
					total: cart.totalCost,
					deliveryCost: cart.deliveryCost,
					amount: cart.amount,
					firstName: address?.firstName,
					lastName: address?.lastName,
					email: address?.email,
					phoneNumber: address?.phoneNumber,
					streetAddress: address?.streetAddress,
					apt: address?.apt,
					postalCode: address?.postalCode,
					state: address?.state,
					city: address?.city,
				}
			);

			if (data.status === "success") {
				toast.success("Thank you for your purchase.");
				router.push("/account/orders");
				cart.cartItems.forEach((item) => {
					dispatch(removeItem(item));
				});
			}
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<div className='p-2 sm:flex  justify-center'>
			<div className='lg:flex lg:w-full lg:justify-center lg:gap-6 xl:gap-20 min-h-[90vh]'>
				<AddressForm
					// setShippingFormData={setShippingFormData}
					setIsShippingFormValid={setIsShippingFormValid}
				/>
				<ShippingCart
					addOrderHandler={addOrderHandler}
					isShippingFormValid={isShippingFormValid}
				/>
			</div>
		</div>
	);
}
