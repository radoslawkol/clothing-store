import React from "react";
import { useRef, useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import SortModal from "./SortModal";

export default function ToolbarDesktop({ setViewHandler }) {
	const [sortOpen, setSortOpen] = useState(false);
	const basicView = 3;
	const optionalView = 4;
	const viewRef1 = useRef();
	const viewRef2 = useRef();

	useEffect(() => {}, []);

	const viewHandler = (num) => {
		setViewHandler(num);
		if (num === basicView) {
			viewRef1.current.classList.add("underline");
			viewRef2.current.classList.remove("underline");
		} else {
			viewRef2.current.classList.add("underline");
			viewRef1.current.classList.remove("underline");
		}
	};

	return (
		<div className='relative flex justify-between items-center text-primary-key mt-4 mx-2'>
			<div className='flex gap-4 items-center cursor-pointer hover:font-bold duration-400'>
				<label
					htmlFor=''
					className='flex items-center gap-1 text-sm cursor-pointer'
					onClick={() => setSortOpen(true)}
				>
					<span>Sort</span>
					<ChevronDownIcon className={`w-5 h-5 ${sortOpen && "rotate-180"}`} />
				</label>
			</div>
			<span className='text-sm '>154 products</span>
			<p className='text-sm'>
				View &nbsp;
				<span
					className='underline cursor-pointer'
					onClick={() => viewHandler(basicView)}
					ref={viewRef1}
				>
					{basicView}
				</span>
				<span
					className='ml-1 cursor-pointer'
					onClick={() => viewHandler(optionalView)}
					ref={viewRef2}
				>
					{optionalView}
				</span>
			</p>
			{sortOpen && <SortModal />}
		</div>
	);
}
