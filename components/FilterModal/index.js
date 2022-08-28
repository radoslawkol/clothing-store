import React from "react";
import MenuMobileItem from "../Navigation/MenuMobile/MenuMobileItem";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function FilterModal({ setIsFiltersOpen }) {
	return (
		<div
			className={`fixed z-50 w-full h-full p-2 left-0 top-0 bg-on-primary-key animate-mobileMenuOpen`}
		>
			<div className='flex items-center gap-4 justify-between'>
				<h2>Filters</h2>
				<XMarkIcon
					className='w-6 h-6 cursor-pointer hover:scale-125 duration-300 text-primary-key'
					onClick={() => setIsFiltersOpen(false)}
				/>
			</div>
			<div className='mt-10'>
				<ul className='flex flex-col gap-3 text-primary-key'>
					{/* {categories.map((cat, i) => (
						<MenuMobileItem category={cat} key={i} />
					))} */}
				</ul>
			</div>
		</div>
	);
}
