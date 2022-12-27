import React from "react";
import { useRouter } from "next/router";
import PageContainer from "../../../../components/Layout/PageContainer";
import Product from "../../../../database/models/Product";
import connectDB from "../../../../database/connectDB";

export default function ProductCategory({ products }) {
	const router = useRouter();
	const breadcrumbs = Object.values(router.query);
	breadcrumbs.unshift("");
	return <PageContainer products={JSON.parse(products)} />;
}

export async function getStaticPaths() {
	try {
		await connectDB();
		const categories = await Product.aggregate([
			{
				$group: {
					_id: {
						gender: "$gender",
						category: "$category",
						productCategory: "$productCategory",
						slug: "$slug",
					},
				},
			},
		]);

		return {
			paths: categories.map((cat) => {
				const { gender, category, productCategory } = cat._id;
				return { params: { gender, category, productCategory } };
			}),
			fallback: false,
		};
	} catch (err) {
		console.log(err);
		return { notFound: true };
	}
}

export async function getStaticProps(context) {
	try {
		const { gender, category, productCategory } = context.params;
		await connectDB();
		let products = [];

		products = await Product.aggregate([
			{
				$match: {
					$and: [{ gender }, { category }, { productCategory }],
				},
			},
		]);

		if (products.length === 0) {
			return { notFound: true };
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
