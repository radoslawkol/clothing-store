import axios from "axios";
import React from "react";
import ProductDetail from "../../../../../components/ProductDetail";
import ProductComments from "../../../../../components/ProductComments";
export default function ProductPage({ product }) {
	return <ProductDetail product={product} />;
}

export async function getStaticPaths() {
	try {
		return {
			paths: ["/woman/clothing/dresses/white-short-dress"],
			fallback: "blocking",
		};
	} catch (err) {
		console.log(err);
		return { notFound: true };
	}
}

export async function getStaticProps(context) {
	const { product } = context.params;
	try {
		const { data } = await axios.get(
			`${process.env.BASE_URL}/api/products/${product}`
		);

		console.log(data);

		return {
			props: {
				product: data.product,
			},
		};
	} catch (err) {
		console.log(err);
		return { notFound: true };
	}
}
