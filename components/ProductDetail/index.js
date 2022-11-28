import React from "react";
import ProductSlider from "./ProductSlider";
import { useRouter } from "next/router";
import Breadcrumbs from "../../utils/Breadcrumbs";
import ProductCouponInfo from "../ProductCouponInfo";
import ButtonPrimary from "../../utils/ButtonPrimary";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import ProductComments from "../ProductComments";
import { useDispatch, useSelector } from "react-redux";
import {
	addItem,
	addCartToCookies,
	calculateTotals,
	getCartFromCookies,
} from "../../reducers/cartReducer";
import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import AvaliableColors from "./AvaliableColors";
import axios from "axios";
import {
	addFavourite,
	removeFavourite,
} from "../../reducers/favouritesReducer";
import ProductReviews from "./ProductReviews";
import ReviewStars from "../ProductComments/ReviewStars";
import Cookies from "js-cookie";

export default function ProductDetail({ product, setAddToBagModalVisible }) {
	const router = useRouter();
	const dispatch = useDispatch();
	const { user } = useSelector((store) => store);

	const [displayFavBtn, setDisplayFavBtn] = useState(false);
	const [isFavourite, setIsFavourite] = useState(false);
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

	useEffect(() => {
		if (user) {
			setDisplayFavBtn(true);
		}
	}, [user]);

	useEffect(() => {
		setIsFavourite(product.isFavourite);
	}, [product.isFavourite]);

	const addToBagHandler = async () => {
		const itemIndex = `${Math.floor(Math.random() * 1000000)}-${size}-${
			product._id
		}`;
		if (size) {
			const newCart = {
				...product,
				index: itemIndex,
				size,
				quantity: 1,
				reviews: undefined,
				comments: undefined,
			};

			await dispatch(addItem(newCart));
			await dispatch(calculateTotals());
			setAddToBagModalVisible(true);
			dispatch(addCartToCookies());
		} else {
			if (!toast.isActive(toastId.current)) {
				toast.error("Choose size you want to order.", {
					toastId: "size-not-given-product-detail",
				});
			}
		}
	};

	const favouriteHandler = async () => {
		const { data } = await axios.patch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/favourites`,
			{
				userId: user._id,
				favouriteProductId: product._id,
			}
		);

		if (data.operation === "added") {
			setIsFavourite(true);
			dispatch(addFavourite(product));
		} else {
			setIsFavourite(false);
			dispatch(removeFavourite(product._id));
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
					<ReviewStars rating={product.avgRating} />
					<span>${product.price}</span>
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
						{displayFavBtn && (
							<button
								className='bg-secondary rounded-full p-2 hover:scale-95 duration-300'
								onClick={favouriteHandler}
							>
								{isFavourite ? (
									<HeartSolid className='w-6 h-6' />
								) : (
									<HeartIcon className='w-6 h-6' />
								)}
							</button>
						)}
					</div>
					<ProductComments product={product} />
				</div>
			</div>
		</section>
	);
}
