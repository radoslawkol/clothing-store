import React from "react";
import Image from "next/image";
import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { increase, removeItem, decrease } from "../../../reducers/cartReducer";
import { useState } from "react";
import { useEffect } from "react";
import { addCartToCookies } from "../../../reducers/cartReducer";
export default function ProductCard({
	index,
	title,
	image,
	size,
	color,
	gender,
	category,
	productCategory,
	slug,
	price,
	quantity,
}) {
	const dispatch = useDispatch();
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		setTotalPrice(price * quantity);
	}, [quantity]);

	return (
		<article className='relative flex w-full rounded-lg shadow-lg '>
			<Link href={`/${gender}/${category}/${productCategory}/${slug}`}>
				<div className='relative w-1/3 sm:w-1/4 md:w-[20%] lg:h-36'>
					<Image
						src={image[0]}
						alt={title}
						layout='fill'
						className='w-20 h-full rounded-l-lg object-cover bg-center cursor-pointer'
					/>
				</div>
			</Link>

			<div className='text-primary-key p-2'>
				<div>
					<h3 className='text-lg lg:text-xl mb-2'>{title}</h3>
					<span className='block text-[12px] lg:text-sm'>color: {color}</span>
					<span className='text-[12px] lg:text-sm'>size: {size}</span>
				</div>
				<div className='mt-2 flex items-center gap-1'>
					<button
						className='text-lg px-1 h-6 bg-primary hover:bg-primary-key duration-300 hover:text-on-primary-key rounded-md'
						onClick={() => {
							dispatch(decrease({ index }));
							dispatch(addCartToCookies());
						}}
					>
						<MinusIcon className='h-3 w-3' />
					</button>
					<span>{quantity}</span>
					<button
						className='text-lg px-1 h-6 bg-primary hover:bg-primary-key duration-300 hover:text-on-primary-key rounded-md'
						onClick={() => {
							dispatch(increase({ index }));
							dispatch(addCartToCookies());
						}}
					>
						<PlusIcon className='h-3 w-3' />
					</button>
				</div>
			</div>
			<button
				className='absolute top-2 right-2 '
				onClick={() => {
					dispatch(removeItem({ index }));
					dispatch(addCartToCookies());
				}}
			>
				<TrashIcon className='w-4 h-4 text-primary-key' />
			</button>
			<strong className='absolute bottom-2 right-2 text-primary-key'>
				${totalPrice}
			</strong>
		</article>
	);
}
