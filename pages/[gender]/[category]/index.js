import React from "react";
import PageContainer from "../../../components/Layout/PageContainer";
import axios from "axios";

export default function Category({ products }) {
	return <PageContainer products={products} />;
}

export async function getStaticPaths({ products }) {
	return {
		paths: [
			{ params: { gender: "man", category: "clothing" } },
			{ params: { gender: "man", category: "accessories" } },
			{ params: { gender: "woman", category: "clothing" } },
			{ params: { gender: "woman", category: "accessories" } },
			{ params: { gender: "new", category: "clothing" } },
			{ params: { gender: "new", category: "accessories" } },
		],
		fallback: false,
	};
}

export async function getStaticProps(context) {
	try {
		const { gender, category } = context.params;
		const { data } = await axios.get(
			`http://localhost:3000/api/products?gender=${gender}&category=${category}`
		);
		console.log(data);

		return {
			props: {
				products: data.products,
			},
			revalidate: 20,
		};
	} catch (err) {
		console.log(err);
		return { notFound: true };
	}
}
