import React from "react";
import ButtonPrimary from "../../../utils/ButtonPrimary";
import Discount from "../Discount";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Summary({
	totalPrice,
	totalCost,
	deliveryCost,
	discount,
}) {
	const [isDiscountApplied, setIsDiscountApplied] = useState(false);

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

			<ButtonPrimary width='full' href='/shipping'>
				Checkout
			</ButtonPrimary>

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
