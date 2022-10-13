import React from "react";
import ProductCard from "../ProductCard";

export default function AccountFavourites() {
	return (
		<section className='lg:px-8 min-h-[50vh] mb-20'>
			<h2 className='text-lg font-thin tracking-wider text-primary-key mx-2 mb-4'>
				Favourites items
			</h2>
			<div className='grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
				<ProductCard favourite={true} />
				<ProductCard favourite={true} />
				<ProductCard favourite={true} />
				<ProductCard favourite={true} />
				<ProductCard favourite={true} />
				<ProductCard favourite={true} />
				<ProductCard favourite={true} />
				<ProductCard favourite={true} />
			</div>
		</section>
	);
}
