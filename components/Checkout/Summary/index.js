import React from "react";
import ButtonPrimary from "../../../utils/ButtonPrimary";
import Discount from "../Discount";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Summary({
	totalPrice,
	totalCost,
	deliveryCost,
	discount,
	areProductsInBag,
}) {
	const [isDiscountApplied, setIsDiscountApplied] = useState(false);
	const { user, cart } = useSelector((store) => store);
	const [cartItems, setCartItems] = useState([]);
	const router = useRouter();

	useEffect(() => {
		setIsDiscountApplied(cart.discount ? true : false);
		const items = cart.cartItems.map((item) => {
			return {
				product: item._id,
				quantity: item.quantity,
			};
		});
		setCartItems(items);
	}, [cart]);

	const createCart = async () => {
		try {
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
				{
					cartItems,
					discount: cart.discount,
				},
				{
					headers: {
						authorization: `Bearer ${user.token}`,
					},
				}
			);

			console.log(data);

			if (data.status === "success") {
				router.push("/shipping");
			} else {
			}
		} catch (err) {
			console.log(err);
		}
	};

	const checkoutBtnHandler = () => {
		if (user && areProductsInBag) {
			createCart();
		} else if (!user) {
			toast.error("Create an account or log in to buy products.");
			router.push("/login");
		} else if (!areProductsInBag) {
			toast.error("Add products to bag to continue.");
		}
	};

	return (
		<div className='mt-8 lg:mt-0 p-4 sm:w-3/4 lg:w-[30%] lg:bg-primary mx-auto lg:pt-24 xl:px-16'>
			<ul className='flex flex-col gap-2 text-primary-key mb-8'>
				<li className='flex justify-between uppercase'>
					Total price <span>{`$${totalPrice.toFixed(2)}`}</span>
				</li>
				<li className='flex justify-between uppercase'>
					Delivery <span>${deliveryCost.toFixed(2)}</span>
				</li>
				{isDiscountApplied && (
					<li className='flex justify-between uppercase text-info-primary-key'>
						Discount <span>${(totalPrice * discount).toFixed(2)}</span>
					</li>
				)}
				<hr />
				<li className='flex justify-between uppercase font-bold'>
					Total amount <span>${totalCost.toFixed(2)}</span>
				</li>
			</ul>
			<div onClick={checkoutBtnHandler}>
				<ButtonPrimary width='full'>Checkout</ButtonPrimary>
			</div>

			<Discount
				setIsDiscountApplied={setIsDiscountApplied}
				isDiscountApplied={isDiscountApplied}
			/>
			<div className='flex gap-1 items-center'>
				<InformationCircleIcon className='w-6 h-6 text-info-primary-key' />
				<p className='text-info-primary-key'>Returns till 30 days</p>
			</div>
		</div>
	);
}
