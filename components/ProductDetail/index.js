import React from "react";
import ProductSlider from "./ProductSlider";
import { useRouter } from "next/router";
import Breadcrumbs from "../../utils/Breadcrumbs";
import ProductReviews from "./ProductReviews";
import ProductCouponInfo from "../ProductCouponInfo";
import ButtonPrimary from "../../utils/ButtonPrimary";
import { HeartIcon } from "@heroicons/react/24/outline";
import ProductComments from "../ProductComments";
import { useDispatch } from "react-redux";
import { addItem } from "../../reducers/cartReducer";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import AvaliableColors from "./AvaliableColors";

export default function ProductDetail({ product, setAddToBagModalVisible }) {
	const router = useRouter();
	const dispatch = useDispatch();

	const [size, setSize] = useState("");
	const toastId = useRef(null);
	const selectSizeRef = useRef();

	const breadcrumbs = Object.values(router.query);
	breadcrumbs.unshift("");

	const inStock = product.inStock ? (
		<strong className='text-success-primary-key'>In stock</strong>
	) : (
		<strong className='text-error-primary-key'>unavailable</strong>
	);

	const addToBagHandler = () => {
		const itemIndex = `${Math.floor(Math.random() * 1000000)}-${size}-${
			product._id
		}`;
		if (size) {
			dispatch(
				addItem({
					...product,
					index: itemIndex,
					size,
					quantity: 1,
					reviews: undefined,
					comments: undefined,
				})
			);
			setAddToBagModalVisible(true);
		} else {
			if (!toast.isActive(toastId.current)) {
				toast.error("Choose size you want to order.", {
					toastId: "size-not-given-product-detail",
				});
			}
		}
	};

	return (
		<section className='text-primary-key'>
			<div className='text-center sm:text-left m-2'>
				<Breadcrumbs breadcrumbs={breadcrumbs} />
			</div>
			<div className='p-2 sm:p-4 md:p-8 lg:p-12 xl:p-24 md:flex gap-4 md:gap-8'>
				<ProductSlider image={product.image} />
				<div className='flex flex-col md:w-1/2 xl:text-lg'>
					<h1 className='mb-2 font-bold uppercase lg:text-xl'>
						{product.title}
					</h1>
					<span>${product.price}</span>
					<ProductReviews />
					<ProductCouponInfo />
					<span>status: {inStock}</span>
					<span>color: {product.color}</span>
					<AvaliableColors
						colors={product.colors}
						productSKU={product.sku}
						productTitle={product.title}
						productSlug={product.slug}
					/>
					<label htmlFor='size'>size:</label>
					<select
						ref={selectSizeRef}
						name='size'
						id='size'
						className='w-40 border border-primary-key rounded-md mt-2 mb-6'
						defaultValue={"default"}
						onChange={(e) => setSize(e.target.value)}
					>
						<option disabled hidden value={"default"}>
							Please select
						</option>
						{product.sizes.map((size, i) => (
							<option value={size} key={i}>
								{size}
							</option>
						))}
					</select>
					<div className='flex items-center gap-3 xl:my-6'>
						<div onClick={addToBagHandler}>
							<ButtonPrimary>Add to Bag</ButtonPrimary>
						</div>
						<button className='bg-secondary rounded-full p-2 hover:scale-95 duration-300'>
							<HeartIcon className='w-6 h-6' />
						</button>
					</div>
					<ProductComments comments={product.comments} />
				</div>
			</div>
		</section>
	);
}
