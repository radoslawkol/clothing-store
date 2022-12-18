import React from "react";
import PageContainer from "../../components/Layout/PageContainer";
import axios from "axios";

export default function Gender({ products }) {
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
		const { gender } = context.params;
		const { data } = await axios.get(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/products?gender=${gender}`
		);

		return {
			props: {
				products: data.products,
			},
			revalidate: 20,
		};
	} catch (err) {
		console.log(err);
		return { notfound: true };
	}
}
