import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductDetail from "../../../../../components/ProductDetail";
import ReactDOM from "react-dom";
import AddToBagModal from "../../../../../components/AddToBagModal";
import Product from "../../../../../database/models/Product";
import connectDB from "../../../../../database/connectDB";

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
				product={JSON.parse(product)}
				setAddToBagModalVisible={setAddToBagModalVisible}
			/>
			{addToBagModalVisible &&
				ReactDOM.createPortal(
					<AddToBagModal
						productId={JSON.parse(product)._id}
						setAddToBagModalVisible={setAddToBagModalVisible}
					/>,
					modalRoot
				)}
		</>
	);
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
				const { gender, category, productCategory, slug } = cat._id;
				return { params: { gender, category, productCategory, product: slug } };
			}),
			fallback: false,
		};
	} catch (err) {
		console.log(err);
		return { notFound: true };
	}
}

export async function getStaticProps(context) {
	const { product } = context.params;
	try {
		await connectDB();

		let productData = await Product.findOne({ slug: product });

		if (!productData) {
			return { notFound: true };
		}

		await productData.populate({
			path: "comments",
			populate: {
				path: "user",
				select: "firstName lastName",
			},
		});

		let avgRating = 0;
		let result = 0;

		if (productData.comments.length > 0) {
			productData.comments.forEach((comment) => {
				result += comment.rating;
			});
			avgRating = result / productData.comments.length;
		}

		productData = {
			...productData.toObject(),
			avgRating,
		};

		return {
			props: {
				product: JSON.stringify(productData),
			},
			revalidate: 20,
		};
	} catch (err) {
		console.log(err);
		return { notFound: true };
	}
}
