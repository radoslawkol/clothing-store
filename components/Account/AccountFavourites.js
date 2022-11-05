import React from "react";
import ProductCard from "../ProductCard";
import { useSelector } from "react-redux";

export default function AccountFavourites({ user }) {
	const { favourites } = useSelector((store) => store);
	return (
		<section className='lg:px-8 min-h-[50vh] mb-20 w-full'>
			<h2 className='text-lg font-thin tracking-wider text-primary-key mx-2 mb-4'>
				Favourites items
			</h2>
			<div className='grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
				{favourites.products.length !== 0 ? (
					favourites.products.map((fav) => (
						<ProductCard product={fav} favourite={true} key={fav.sku} />
					))
				) : (
					<p>You don't have any favorites items.</p>
				)}
			</div>
		</section>
	);
}
