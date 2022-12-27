import React from "react";
import PageContainer from "../../components/Layout/PageContainer";
import connectDB from "../../database/connectDB";
import Product from "../../database/models/Product";

export default function Gender({ products }) {
	return <PageContainer products={JSON.parse(products)} />;
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
		await connectDB();

		let products = [];

		if (gender !== "new") {
			products = await Product.find({
				gender,
			}).sort({
				createdAt: -1,
			});
		} else {
			products = await Product.find();
			products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
		}

		if (products.length === 0) {
			return { notfound: true };
		}

		return {
			props: {
				products: JSON.stringify(products),
			},
			revalidate: 20,
		};
	} catch (err) {
		console.log(err);
		return { notfound: true };
	}
}
