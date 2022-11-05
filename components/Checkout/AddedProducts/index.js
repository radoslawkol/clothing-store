import React from "react";
import ProductCard from "../ProductCard";
export default function AddedProducts({ cartItems }) {
	return (
		<div className='flex flex-col mt-8 gap-4 p-2 sm:p-4 sm:w-3/4 mx-auto lg:p-8 lg:w-full lg:ml-0 overflow-auto max-h-[44vh] lg:max-h-[68vh]'>
			{cartItems.length !== 0 ? (
				cartItems.map((item) => {
					return <ProductCard {...item} key={item.index} />;
				})
			) : (
				<p className='text-center text-lg lg:text-left pl-6  lg:tracking-wide lg:text-xl lg:uppercase lg:-translate-y-8'>
					You don't have any products in a bag.
				</p>
			)}
		</div>
	);
}
