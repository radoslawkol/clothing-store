import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import PageContainer from "../../../../components/Layout/PageContainer";
import Product from "../../../../database/models/Product";
import connectDB from "../../../../database/connectDB";

export default function ProductCategory({ products }) {
	const router = useRouter();
	const breadcrumbs = Object.values(router.query);
	breadcrumbs.unshift("");
	return <PageContainer products={products} />;
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
			fallback: true,
		};
	} catch (err) {
		console.log(err);
		return { notFound: true };
	}
}

export async function getStaticProps(context) {
	try {
		const { gender, category, productCategory } = context.params;
		const { data } = await axios.get(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/products?gender=${gender}&category=${category}&productCategory=${productCategory}`
		);
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
