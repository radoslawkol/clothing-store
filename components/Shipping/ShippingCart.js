import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import axios from "axios";
import { resetCart } from "../../reducers/cartReducer";

export default function ShippingCart({
	isShippingFormValid,
	addOrderHandler,
	cart,
}) {
	const { user } = useSelector((store) => store);
	const dispatch = useDispatch();
	return (
		<section className='p-4 lg:w-[40%] xl:w-[30%] lg:mt-6'>
			<h2 className='text-lg '>In Your Cart</h2>
			<div className='mt-8 flex flex-col gap-4'>
				{cart.cartItems?.map((item) => (
					<article
						className='  flex items-center justify-between gap-2 shadow-md pr-4'
						key={item.product.sku}
					>
						<div className='relative w-16 h-20'>
							<Image
								layout='fill'
								src={item.product.image[0]}
								className='object-cover'
							/>
						</div>
						<h4 className='text-primary-key'>{item.product.title}</h4>
						<span className='text-primary-key font-bold'>x{item.quantity}</span>
						<strong className='text-primary-key'>
							${item.product.price * item.quantity}
						</strong>
					</article>
				))}
			</div>

			<div className='mt-8 p-4 '>
				<ul className='flex flex-col gap-2 text-primary-key mb-8'>
					<li className='flex justify-between uppercase'>
						Total price <span>{`$${cart.totalPrice.toFixed(2)}`}</span>
					</li>
					<li className='flex justify-between uppercase'>
						Delivery <span>${cart.deliveryCost.toFixed(2)}</span>
					</li>
					{cart.discount > 0 && (
						<li className='flex justify-between uppercase text-info-primary-key'>
							Discount{" "}
							<span>-${(cart.discount * cart.totalPrice).toFixed(2)}</span>
						</li>
					)}
					<hr />
					<li className='flex justify-between uppercase font-bold'>
						Total amount <span>${cart.totalCost.toFixed(2)}</span>
					</li>
				</ul>
				<PayPalButtons
					disabled={!isShippingFormValid || cart.cartItems.length < 1}
					createOrder={async () => {
						try {
							const { data } = await axios.post(
								`${process.env.NEXT_PUBLIC_BASE_URL}/api/keys/paypal`,
								{},
								{
									headers: {
										authorization: `Bearer ${user.token}`,
									},
								}
							);
							return data.id;
						} catch (err) {
							console.log(err);
						}
					}}
					onApprove={(data, actions) => {
						console.log(data);
						dispatch(resetCart());
						localStorage.removeItem("cart");
						addOrderHandler();
						actions.order.capture();
					}}
					onCancel={(data, actions) => {
						console.log("Payment canceled");
					}}
					style={{ layout: "horizontal", tagline: false }}
				/>
			</div>
		</section>
	);
}
