import React from "react";
import ProductSlider from "./ProductSlider";
import { useRouter } from "next/router";
import Breadcrumbs from "../../utils/Breadcrumbs";
import ProductReviews from "./ProductReviews";
import ProductCouponInfo from "../ProductCouponInfo";
import ButtonPrimary from "../../utils/ButtonPrimary";
import { HeartIcon } from "@heroicons/react/24/outline";
import ProductComments from "../ProductComments";

export default function ProductDetail({ product }) {
	const router = useRouter();

	const breadcrumbs = Object.values(router.query);
	breadcrumbs.unshift("");

	const inStock = product.inStock ? (
		<strong className='text-success-primary-key'>In stock</strong>
	) : (
		<strong className='text-error-primary-key'>unavailable</strong>
	);

	return (
		<section className='text-primary-key'>
			<div className='text-center sm:text-left m-2'>
				<Breadcrumbs breadcrumbs={breadcrumbs} />
			</div>
			<div className='p-2 sm:p-4 md:p-8 lg:p-12 xl:p-24 md:flex gap-4 md:gap-8'>
				<ProductSlider />
				<div className='flex flex-col md:w-1/2 xl:text-lg'>
					<h1 className='mb-2 font-bold uppercase lg:text-xl'>
						{product.title}
					</h1>
					<span>${product.price}</span>
					<ProductReviews />
					<ProductCouponInfo />
					<span>status: {inStock}</span>
					<span>color: {product.color}</span>
					{/* other avaliable colors */}
					<label for='size'>size:</label>
					<select
						name='size'
						id='size'
						className='w-40 border border-primary-key rounded-md mt-2 mb-6'
					>
						<option disabled selected hidden>
							Please select
						</option>
						<option value={product.size}>{product.size}</option>
					</select>
					<div className='flex items-center gap-3 xl:my-6'>
						<ButtonPrimary>Add to Bag</ButtonPrimary>
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
