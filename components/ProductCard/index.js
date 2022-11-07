import React, { useState } from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import axios from "axios";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
	addFavourite,
	removeFavourite,
} from "../../reducers/favouritesReducer";

export default function ProductCard({ favourite = false, product }) {
	const router = useRouter();
	const dispatch = useDispatch();
	const { user } = useSelector((store) => store);
	const [isFavourite, setIsFavourite] = useState(favourite);
	const [displayFavBtn, setDisplayFavBtn] = useState(false);
	const productCardRef = useRef();

	useEffect(() => {
		if (user) {
			setDisplayFavBtn(true);
		}
	}, [user]);

	useEffect(() => {
		setIsFavourite(favourite);
	}, [favourite]);

	const clickHandler = (e) => {
		e.stopPropagation();
		if (!e.target.closest(".favouriteBtn")) {
			router.push(
				`/${product.gender}/${product.category}/${product.productCategory}/${product.slug}`
			);
		} else {
			favouriteHandler();
		}
	};

	const favouriteHandler = async () => {
		const { data } = await axios.patch(`http://localhost:3000/api/favourites`, {
			userId: user._id,
			favouriteProductId: product._id,
		});

		if (data.operation === "added") {
			setIsFavourite(true);
			dispatch(addFavourite(product));
		} else {
			setIsFavourite(false);
			dispatch(removeFavourite(product._id));
		}
	};
	return (
		<div
			className='w-full p-2 rounded-md text-primary-key cursor-pointer'
			onClick={clickHandler}
			ref={productCardRef}
		>
			<div className='relative'>
				<div className='w-[100px] h-[200px] md:h-[300px] rounded-md'>
					<Image
						src={product?.image[0]}
						layout='fill'
						className='object-cover'
					/>
				</div>
				{displayFavBtn && (
					<button className='z-10 absolute bottom-3 right-1 p-2 bg-on-primary-key rounded-full cursor-pointer favouriteBtn'>
						{isFavourite ? (
							<HeartSolid
								className='w-6 h-6 hover:scale-110 duration-300'
								onClick={(e) => clickHandler(e)}
							/>
						) : (
							<HeartIcon
								className='w-6 h-6 hover:scale-110 duration-300'
								onClick={(e) => clickHandler(e)}
							/>
						)}
					</button>
				)}
			</div>
			<p className='mt-2'>{product?.title}</p>
			<span className='font-bold'>${product?.price}</span>
		</div>
	);
}
