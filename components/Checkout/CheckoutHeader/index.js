import React from "react";
import {
	ShoppingBagIcon,
	InformationCircleIcon,
} from "@heroicons/react/24/outline";

export default function CheckoutHeader({ products }) {
	return (
		<div className='p-2 sm:p-4 sm:w-3/4 mx-auto lg:p-8 lg:w-full lg:ml-0'>
			<div className='text-primary-key'>
				<div className='flex items-center text-lg lg:text-xl '>
					<ShoppingBagIcon className='w-6 h-6 lg:w-8 lg:h-8' />
					<h1 className='mr-2'>My Bag</h1>
					<span className='bg-primary rounded-md px-1'>{products} art.</span>
				</div>
				<p className='flex md:items-center mt-2 gap-1 md:gap-0 text-info-primary-key text-sm lg:text-md'>
					<InformationCircleIcon className='w-8 h-6' /> Don’t hesitate to buy,
					adding products to the bag doesn’t mean them reservation.
				</p>
			</div>
		</div>
	);
}
