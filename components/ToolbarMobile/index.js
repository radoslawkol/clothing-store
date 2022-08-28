import React from "react";
import ReactDOM from "react-dom";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { useEffect, useState } from "react";
import FilterModal from "../FilterModal";

export default function ToolbarMobile({ setViewHandler }) {
	const [isFiltersOpen, setIsFiltersOpen] = useState(false);
	const [modalRoot, setModalRoot] = useState();
	const basicView = 1;
	const optionalView = 2;
	const viewRef1 = useRef();
	const viewRef2 = useRef();

	useEffect(() => {
		setModalRoot(document.getElementById("modal-root"));
	}, []);

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
		<div className='flex justify-between items-center text-primary-key mt-4'>
			<div
				className='flex gap-1 items-center cursor-pointer hover:font-bold duration-400'
				onClick={() => setIsFiltersOpen(true)}
			>
				<AdjustmentsHorizontalIcon className='w-6 h-6' />
				<span className='uppercase text-sm'>Filters</span>
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
			{isFiltersOpen &&
				ReactDOM.createPortal(
					<FilterModal setIsFiltersOpen={setIsFiltersOpen} />,
					modalRoot
				)}
		</div>
	);
}
