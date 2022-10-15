import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import PageContainer from "../../../../components/Layout/PageContainer";

export default function ProductCategory({ products }) {
	const router = useRouter();
	const breadcrumbs = Object.values(router.query);
	breadcrumbs.unshift("");
	return <PageContainer products={products} />;
}

export async function getStaticPaths() {
	const { data } = await axios.get(
		`http://localhost:3000/api/products/allCategories`
	);

	const pathsArr = data.productCategories.map((cat) => {
		const { gender, category, productCategory } = cat._id;
		console.log(gender, category, productCategory);
		return { params: { gender, category, productCategory } };
	});

	return {
		paths: pathsArr,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	try {
		const { gender, category, productCategory } = context.params;
		const { data } = await axios.get(
			`http://localhost:3000/api/products?gender=${gender}&category=${category}&productCategory=${productCategory}`
		);
		console.log(data);

		return {
			props: {
				products: data.products,
			},
		};
	} catch (err) {
		console.log(err);
	}
}
