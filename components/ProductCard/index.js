import React, { useState } from "react";
import Image from "next/image";
import product from "../../images/exampleProduct.jpg";
import Link from "next/link";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { useEffect } from "react";

export default function ProductCard({ favourite = false, product }) {
	const addFavourite = () => {
		console.log("%cAddFavourite", "color: orange");
	};

	const removeFavourite = () => {
		console.log("%cRemoveFavourite", "color: red");
	};
	return (
		<Link href={`/man/clothing/white-t-shirt`}>
			<div className='w-full p-2 rounded-md text-primary-key cursor-pointer'>
				<div className='relative'>
					<div className='w-[100px] h-[200px] rounded-md'>
						<Image src={product.image} layout='fill' className='object-cover' />
					</div>
					<div className='z-10 absolute bottom-3 right-1 p-2 bg-on-primary-key rounded-full cursor-pointer'>
						{favourite ? (
							<HeartSolid
								className='w-6 h-6 hover:scale-110 duration-300'
								onClick={removeFavourite}
							/>
						) : (
							<HeartIcon
								className='w-6 h-6 hover:scale-110 duration-300'
								onClick={addFavourite}
							/>
						)}
					</div>
				</div>
				<p>White T-shirt</p>
				<span className='font-bold'>${product.price}</span>
			</div>
		</Link>
	);
}
