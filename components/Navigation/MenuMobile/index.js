import React, { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import MenuMobileItem from "./MenuMobileItem";
import LogoBrown from "../../../utils/LogoBrown";
import { useRouter } from "next/router";

export default function MenuMobile({ setIsMenuOpen, categories }) {
	const router = useRouter();

	const closeMenuHandler = () => {
		setIsMenuOpen((prev) => ({ ...prev, mobile: false }));
	};

	useEffect(() => {
		router.events.on("routeChangeStart", closeMenuHandler);

		return () => {
			router.events.off("routeChangeStart", closeMenuHandler);
		};
	});

	return (
		<div
			className={`fixed z-50 w-full h-full p-2  left-0 top-0 bg-on-primary-key animate-mobileMenuOpen`}
		>
			<div className='flex items-center gap-4 justify-between'>
				<LogoBrown />
				<XMarkIcon
					className='w-6 h-6 cursor-pointer hover:scale-125 duration-300 text-primary-key'
					onClick={closeMenuHandler}
				/>
			</div>
			<div className='mt-10'>
				<ul className='flex flex-col gap-3 text-primary-key'>
					{categories.map((cat, i) => (
						<MenuMobileItem
							category={cat}
							key={i}
							setIsMenuOpen={setIsMenuOpen}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}
