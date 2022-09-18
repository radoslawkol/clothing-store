import React from "react";
import ProductCard from "../ProductCard";
export default function AddedProducts() {
	return (
		<div className='flex flex-col mt-8 gap-4 p-2 sm:p-4 sm:w-3/4 mx-auto lg:p-8 lg:w-full lg:ml-0 overflow-auto max-h-[44vh] lg:max-h-[68vh]'>
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</div>
	);
}
