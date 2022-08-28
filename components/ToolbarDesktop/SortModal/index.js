import React from "react";
import ButtonPrimary from "../../../utils/ButtonPrimary";

export default function SortModal() {
	return (
		<div className='z-50 absolute top-5 shadow-md rounded-md bg-on-primary-key border border-primary-key text-center pb-4 overflow-hidden'>
			<ul className='text-left mb-2'>
				<li className='p-2 hover:bg-secondary cursor-pointer px-4'>
					What's new
				</li>
				<li className='p-2 hover:bg-secondary cursor-pointer px-4'>
					Price low to high
				</li>
				<li className='p-2 hover:bg-secondary cursor-pointer px-4'>
					Price high to low
				</li>
			</ul>

			<ButtonPrimary>Sort</ButtonPrimary>
		</div>
	);
}
