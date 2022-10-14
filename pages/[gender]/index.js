import React from "react";
import Layout from "../../components/Layout";
import PageContainer from "../../components/Layout/PageContainer";
import axios from "axios";

export default function Gender({ products }) {
	console.log(products);
	return <PageContainer products={products} />;
}

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { gender: "man" } },
			{ params: { gender: "woman" } },
			{ params: { gender: "new-product" } },
		],
		fallback: false,
	};
}

export async function getStaticProps(context) {
	try {
		const { data } = await axios.get(`http://localhost:3000/api/products`);

		return {
			props: {
				products: data.products,
			},
		};
	} catch (err) {
		console.log(err);
	}
}
