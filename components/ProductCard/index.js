import React from "react";
import Image from "next/image";
import product from "../../images/exampleProduct.jpg";
import Link from "next/link";
import { HeartIcon } from "@heroicons/react/24/outline";

export default function ProductCard() {
	return (
		<Link href={`/man/clothing/white-t-shirt`}>
			<div className='w-full p-2 rounded-md text-primary-key cursor-pointer'>
				<div className='relative'>
					<Image src={product} className='w-full rounded-md' />
					<div className='z-10 absolute bottom-3 right-1 p-2 bg-on-primary-key rounded-full cursor-pointer'>
						<HeartIcon className='w-6 h-6' />
					</div>
				</div>
				<p>White T-shirt</p>
				<span className='font-bold'>$38.00</span>
			</div>
		</Link>
	);
}
