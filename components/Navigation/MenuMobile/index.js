import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/future/image";
import logo from "../../../images/logo.svg";
import { XMarkIcon, PlusIcon } from "@heroicons/react/24/outline";
import menuData from "../../../data/menuData";
import MenuMobileItem from "./MenuMobileItem";

export default function MenuMobile({ setIsMenuOpen }) {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		let catArr = [];
		for (let type in menuData) {
			catArr.push(type);
		}

		setCategories([...new Set(catArr)]);
	}, []);

	const closeMenuHandler = () => {
		setIsMenuOpen((prev) => ({ ...prev, mobile: false }));
	};

	return (
		<div className='z-50 w-full h-full p-2 absolute left-0 top-0 bg-on-primary-key'>
			<div className='flex items-center gap-4 justify-between'>
				<Link href='/'>
					<div href='/' className='flex items-center gap-1 cursor-pointer'>
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
				<XMarkIcon
					className='w-6 h-6 cursor-pointer hover:scale-125 duration-300 text-primary-key'
					onClick={closeMenuHandler}
				/>
			</div>
			<div className='mt-10'>
				<ul className='flex flex-col gap-3 text-primary-key'>
					{categories.map((cat, i) => (
						<MenuMobileItem category={cat} key={i} />
					))}
				</ul>
			</div>
		</div>
	);
}
