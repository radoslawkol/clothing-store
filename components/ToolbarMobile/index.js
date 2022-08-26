import React from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { useEffect } from "react";

export default function ToolbarMobile({ setViewHandler, view }) {
	const viewRef1 = useRef();
	const viewRef2 = useRef();

	useEffect(() => {}, []);

	const viewHandler = (num) => {
		setViewHandler(num);
		if (num === 1) {
			viewRef1.current.classList.add("underline");
			viewRef2.current.classList.remove("underline");
		} else {
			viewRef2.current.classList.add("underline");
			viewRef1.current.classList.remove("underline");
		}
	};

	return (
		<div className='flex justify-between items-center text-primary-key mt-4'>
			<div className='flex gap-1 items-center cursor-pointer hover:font-bold duration-400'>
				<AdjustmentsHorizontalIcon className='w-6 h-6' />
				<span className='uppercase text-sm'>Filters</span>
			</div>
			<span className='text-sm '>154 products</span>
			<p className='text-sm'>
				View &nbsp;
				<span
					className='underline cursor-pointer'
					onClick={() => viewHandler(1)}
					ref={viewRef1}
				>
					1
				</span>
				<span
					className='ml-1 cursor-pointer'
					onClick={() => viewHandler(2)}
					ref={viewRef2}
				>
					2
				</span>
			</p>
		</div>
	);
}
