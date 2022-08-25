import React from "react";
import logo from "../images/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function LogoWhite() {
	return (
		<Link href='/'>
			<div  className='flex items-center gap-1 cursor-pointer'>
				<Image src={logo} alt='Logo' width={24} height={24} />
				<h1 className='text-on-primary-key text-xl'>ClothesShop</h1>
			</div>
		</Link>
	);
}
