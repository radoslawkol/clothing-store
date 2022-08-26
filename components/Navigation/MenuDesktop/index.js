import React, { useRef } from "react";
import Link from "next/link";
import menuData from "../../../data/menuData";

export default function MenuDesktop({
	navbarHeight,
	selectedCategory,
	menuDesktopPositionLeft,
	setIsMenuOpen,
}) {
	const menuRef = useRef();
	return (
		<div
			style={{
				left: `${menuDesktopPositionLeft}px`,
			}}
			className={`z-50 absolute top-[${navbarHeight}px] p-4 border rounded-lg bg-on-primary-key -translate-x-1/2`}
			ref={menuRef}
			onMouseOver={() =>
				setTimeout(() => {
					setIsMenuOpen((prev) => ({ ...prev, desktop: true }));
				}, 500)
			}
			onMouseLeave={() =>
				setIsMenuOpen((prev) => ({ ...prev, desktop: false }))
			}
		>
			<div className='absolute -top-2  left-1/2 -translate-x-1/2 border-solid border-b-on-primary-key border-b-8 border-x-transparent border-x-8 border-t-0'></div>

			<div className='grid grid-flow-col gap-8'>
				{menuData[selectedCategory]?.categories.map((cat, i) => (
					<div key={i}>
						<Link href={`/${cat.category}`}>
							<h3 className='mb-2 tracking-wider capitalize cursor-pointer'>
								{cat.category}
							</h3>
						</Link>
						{selectedCategory !== "new" && (
							<ul className='p-2'>
								{cat.subcategories.map((subCat, i) => (
									<Link
										href={`/${selectedCategory}/${cat.category}/${subCat}`}
										key={i}
									>
										<li className='text-sm hover:font-bold duration-300 cursor-pointer '>
											{subCat}
										</li>
									</Link>
								))}
							</ul>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
