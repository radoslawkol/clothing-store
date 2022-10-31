import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductDetail from "../../../../../components/ProductDetail";
import ProductComments from "../../../../../components/ProductComments";
import ReactDOM from "react-dom";
import AddToBagModal from "../../../../../components/AddToBagModal";
import product from "../../../../../sanity/schemas/product";

export default function ProductPage({ product }) {
	const [addToBagModalVisible, setAddToBagModalVisible] = useState(false);
	const [modalRoot, setModalRoot] = useState();

	useEffect(() => {
		setModalRoot(document.getElementById("modal-root"));
	}, []);

	useEffect(() => {
		if (addToBagModalVisible) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [addToBagModalVisible]);

	return (
		<>
			<ProductDetail
				product={product}
				setAddToBagModalVisible={setAddToBagModalVisible}
			/>
			{addToBagModalVisible &&
				ReactDOM.createPortal(
					<AddToBagModal
						productId={product._id}
						setAddToBagModalVisible={setAddToBagModalVisible}
					/>,
					modalRoot
				)}
		</>
	);
}

export async function getStaticPaths() {
	try {
		const { data } = await axios.get(
			"http://localhost:3000/api/products/getPathsParams"
		);

		const pathsArr = data.productCategories.map((cat) => {
			const { gender, category, productCategory, slug } = cat._id;
			console.log(gender, category, productCategory, slug);
			return {
				params: {
					gender,
					category,
					productCategory,
					product: `${slug}`,
				},
			};
		});
		return {
			paths: pathsArr,
			fallback: "blocking",
		};
	} catch (err) {
		console.log(err);
		return { notFound: true };
	}
}

export async function getStaticProps(context) {
	const { product } = context.params;
	try {
		const { data } = await axios.get(
			`${process.env.BASE_URL}/api/products/${product}`
		);

		console.log(data);

		return {
			props: {
				product: data.product,
			},
		};
	} catch (err) {
		console.log(err);
		return { notFound: true };
	}
}
