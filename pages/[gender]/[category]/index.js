import React from "react";
import PageContainer from "../../../components/Layout/PageContainer";
import connectDB from "../../../database/connectDB";
import Product from "../../../database/models/Product";

export default function Category({ products }) {
	return <PageContainer products={JSON.parse(products)} />;
}

export async function getStaticPaths() {
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
		await connectDB();

		let products = [];

		if (gender === "new") {
			products = await Product.find({
				category,
			});
			products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
		} else {
			products = await Product.aggregate([
				{
					$match: {
						$and: [{ gender }, { category }],
					},
				},
			]).sort({
				createdAt: -1,
			});
		}
		return {
			props: {
				products: JSON.stringify(products),
			},
			revalidate: 20,
		};
	} catch (err) {
		console.log(err);
		return { notFound: true };
	}
}
