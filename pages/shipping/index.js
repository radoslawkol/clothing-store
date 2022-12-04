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
	const { user, address } = useSelector((store) => store);
	const [isShippingFormValid, setIsShippingFormValid] = useState(false);

	const [cart, setCart] = useState({
		totalPrice: 0,
		cartItems: [],
		deliveryCost: 0,
		totalCost: 0,
		discount: 0,
		amount: 0,
	});

	const getCartFromDb = async () => {
		try {
			const { data } = await axios.get(
				`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
				{
					headers: {
						authorization: `Bearer ${user.token}`,
					},
				}
			);

			console.log(data);

			if (data.status === "success") {
				setCart({
					totalPrice: data.cart.totalPrice,
					cartItems: data.cart.cartItems,
					deliveryCost: data.cart.deliveryCost,
					totalCost: data.cart.totalCost,
					discount: data.cart.discount,
					amount: data.cart.amount,
				});
			}
		} catch (err) {
			console.log(err);
			toast.error("Try again later.");
			router.push("/checkout");
		}
	};

	useEffect(() => {
		getCartFromDb();
	}, []);

	const addOrderHandler = async () => {
		try {
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`,
				{
					userId: user._id,
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

			console.log(data);

			if (data.status === "success") {
				toast.success("Thank you for your purchase.");
				router.push("/account/orders");
				cart.cartItems.forEach((item) => {
					dispatch(removeItem(item));
				});
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='p-2 sm:flex  justify-center'>
			<div className='lg:flex lg:w-full lg:justify-center lg:gap-6 xl:gap-20 min-h-[90vh]'>
				<AddressForm setIsShippingFormValid={setIsShippingFormValid} />
				<ShippingCart
					cart={cart}
					addOrderHandler={addOrderHandler}
					isShippingFormValid={isShippingFormValid}
				/>
			</div>
		</div>
	);
}
