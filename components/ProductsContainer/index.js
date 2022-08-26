import React, { useState } from "react";
import ProductCard from "../ProductCard";

export default function ProductsContainer({ view }) {
	return (
		<div className={`grid gap-10 grid-cols-${view} my-8 `}>
			<ProductCard></ProductCard>
			<ProductCard></ProductCard>
			<ProductCard></ProductCard>
			<ProductCard></ProductCard>
			<ProductCard></ProductCard>
			<ProductCard></ProductCard>
		</div>
	);
}
