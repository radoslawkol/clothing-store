import React, { useState } from "react";
import Link from "next/link";
import { XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import menuData from "../../../data/menuData";

export default function MenuMobileItem({ category }) {
	const [tabIsOpen, setTabIsOpen] = useState(false);

	const unrollHandler = () => {
		setTabIsOpen((prev) => !prev);
	};
	return (
		<li>
			<div
				className='flex items-center justify-between border-b-2 border-secondary hover:border-primary-key duration-300 cursor-pointer'
				onClick={unrollHandler}
			>
				<Link href={`/${category}`}>
					<strong>{category}</strong>
				</Link>
				{tabIsOpen ? (
					<MinusIcon className='w-5 h-5 m-2 cursor-pointer hover:scale-125 duration-300 text-primary-key' />
				) : (
					<PlusIcon className='w-5 h-5 m-2 cursor-pointer hover:scale-125 duration-300 text-primary-key' />
				)}
			</div>
			<ul className={`${tabIsOpen ? "flex" : "hidden"} flex-col gap-1`}>
				{menuData[category].categories?.map((el, i) => (
					<Link href={`/man/${el.category}`} key={i}>
						<>
							<li className='text-sm ml-2 cursor-pointer capitalize font-bold'>
								{el.category}
							</li>
							{category !== "new" && (
								<ul className='ml-8 text-sm flex flex-col gap-1'>
									{el.subcategories.map((item, i) => (
										<Link key={i} href={`/man/${el.category}/${item}`}>
											<li className='duration-300 capitalize hover:font-bold cursor-pointer'>
												{item}
											</li>
										</Link>
									))}
								</ul>
							)}
						</>
					</Link>
				))}
			</ul>
		</li>
	);
}
