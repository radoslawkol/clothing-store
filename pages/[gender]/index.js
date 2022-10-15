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
			{ params: { gender: "new" } },
		],
		fallback: false,
	};
}

export async function getStaticProps(context) {
	try {
		console.log(context);
		const { gender } = context.params;
		const { data } = await axios.get(
			`http://localhost:3000/api/products?gender=${gender}`
		);

		return {
			props: {
				products: data.products,
			},
		};
	} catch (err) {
		console.log(err);
	}
}
