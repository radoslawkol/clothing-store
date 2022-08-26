import React, { useRef } from "react";
import Link from "next/link";

export default function NavItem({ category, showMenuHandler, setIsMenuOpen }) {
	const itemRef = useRef();
	return (
		<Link href={`/${category === "new" ? "new-product" : category}`}>
			<li
				className='text-on-primary-key lg:text-lg pb-2 cursor-pointer hover:text-light-grey-hover capitalize'
				onMouseOver={() => showMenuHandler(category, itemRef)}
				ref={itemRef}
				onMouseLeave={() =>
					setTimeout(() => {
						setIsMenuOpen((prev) => ({ ...prev, desktop: false }));
					}, 500)
				}
			>
				{category}
			</li>
		</Link>
	);
}
