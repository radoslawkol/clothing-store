import React, { useEffect, useState } from "react";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function AddToBagModal({ productId, setAddToBagModalVisible }) {
	const { cart } = useSelector((store) => store);
	const [product, setProduct] = useState();
	useEffect(() => {
		setProduct(cart.cartItems.find((item) => item._id === productId));
	}, [cart.cartItems]);

	return (
		<>
			<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] xl:w-[430px] xl:p-8 bg-white rounded-md p-4 z-50'>
				<CheckCircleIcon className='text-success-primary w-8 h-8 m-auto' />
				<XMarkIcon
					className='absolute top-2 right-2 w-5 h-5 cursor-pointer'
					onClick={() => setAddToBagModalVisible(false)}
				/>
				<h3 className='my-3 mb-6 text-center'>
					The product was added to the bag.
				</h3>
				<div className='flex gap-4'>
					<div className='relative w-[80px] h-[100px]'>
						<Image
							layout='fill'
							src={product?.image[0]}
							className='object-cover'
						/>
					</div>
					<div>
						<h4 className='font-bold uppercase'>{product?.title}</h4>
						<span className='block mb-1'>size: {product?.size}</span>
						<strong>${product?.price}</strong>
					</div>
				</div>
			</div>

			<div className='z-40 absolute top-0 left-0 bg-secondary opacity-[80%] w-full h-screen '></div>
		</>
	);
}
