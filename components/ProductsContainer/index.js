import React, { useState } from "react";
import ProductCard from "../ProductCard";

export default function ProductsContainer({ view }) {
	return (
		<div
			className={`grid gap-10 ${view === 2 && "grid-cols-2"} md:grid-cols-3 ${
				view === 4 && "md:grid-cols-4"
			} my-8 `}
		>
			<ProductCard></ProductCard>
			<ProductCard></ProductCard>
			<ProductCard></ProductCard>
			<ProductCard></ProductCard>
			<ProductCard></ProductCard>
			<ProductCard></ProductCard>
		</div>
	);
}
