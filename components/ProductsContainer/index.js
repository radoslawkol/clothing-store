import React, { useState } from "react";
import ProductCard from "../ProductCard";

export default function ProductsContainer({ view, products }) {
	return (
		<div
			className={`grid gap-10 ${view === 2 && "grid-cols-2"} md:grid-cols-3 ${
				view === 4 && "md:grid-cols-4"
			} my-8 `}
		>
			{products?.map((product) => (
				<ProductCard key={product._id} product={product} />
			))}
		</div>
	);
}
