import React from "react";
import logo from "../images/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function LogoBrown() {
	return (
		<Link href='/'>
			<div className='flex items-center gap-1 cursor-pointer'>
				<Image
					src={logo}
					alt='Logo'
					width={24}
					height={24}
					style={{
						filter:
							"invert(17%) sepia(7%) saturate(2983%) hue-rotate(323deg) brightness(25%) contrast(83%)",
					}}
				/>
				<h1 className='text-primary-key text-xl'>ClothesShop</h1>
			</div>
		</Link>
	);
}
