import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { useEffect } from "react";
import { getCartFromCookies } from "../../reducers/cartReducer";
import axios from "axios";
import { toast } from "react-toastify";

export default function ShippingCart({ addOrderHandler }) {
	const dispatch = useDispatch();
	const { totalPrice, cartItems, deliveryCost, totalCost, discount } =
		useSelector((store) => store.cart);

	useEffect(() => {
		dispatch(getCartFromCookies());
	}, []);

	return (
		<section className='p-4 lg:w-[40%] xl:w-[30%] lg:mt-6'>
			<h2 className='text-lg '>In Your Cart</h2>
			<div className='mt-8 flex flex-col gap-4'>
				{cartItems.map((item) => (
					<article
						className='  flex items-center justify-between gap-2 shadow-md pr-4'
						key={item._id}
					>
						<div className='relative w-16 h-20'>
							<Image
								layout='fill'
								src={item.image[0]}
								className='object-cover'
							/>
						</div>
						<h4 className='text-primary-key'>{item.title}</h4>
						<span className='text-primary-key font-bold'>x{item.quantity}</span>
						<strong className='text-primary-key'>
							${item.price * item.quantity}
						</strong>
					</article>
				))}
			</div>

			<div className='mt-8 p-4 '>
				<ul className='flex flex-col gap-2 text-primary-key mb-8'>
					<li className='flex justify-between uppercase'>
						Total price <span>{`$${totalPrice.toFixed(2)}`}</span>
					</li>
					<li className='flex justify-between uppercase'>
						Delivery <span>${deliveryCost.toFixed(2)}</span>
					</li>
					{discount > 0 && (
						<li className='flex justify-between uppercase text-info-primary-key'>
							Discount <span>-${(discount * totalPrice).toFixed(2)}</span>
						</li>
					)}
					<hr />
					<li className='flex justify-between uppercase font-bold'>
						Total amount <span>${totalCost}</span>
					</li>
				</ul>
				<PayPalButtons
					createOrder={async () => {
						try {
							const { data } = await axios.post(
								`${process.env.NEXT_PUBLIC_BASE_URL}/api/keys/paypal`,
								{ value: totalCost }
							);
							return data.id;
						} catch (err) {
							console.log(err);
						}
					}}
					onApprove={(data, actions) => {
						console.log(data);
						actions.order.capture();
						toast.success("Thank you for your purchase.");
						addOrderHandler();
					}}
					style={{ layout: "horizontal", tagline: false }}
				/>
			</div>
		</section>
	);
}
