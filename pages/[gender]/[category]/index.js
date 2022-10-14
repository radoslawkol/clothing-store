import React from "react";
import PageContainer from "../../../components/Layout/PageContainer";
import axios from "axios";

export default function Category({ products }) {
	return <PageContainer products={products} />;
}

export async function getStaticPaths() {
	return {
		paths: [""],
	};
}

export async function getStaticProps(context) {
	try {
		const { data } = await axios.get(`http://localhost:3000/api/products`);
		console.log(data);
	} catch (err) {
		console.log(err);
	}

	return {
		props: {},
	};
}
