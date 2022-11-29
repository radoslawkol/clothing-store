import React from "react";
import { useRef } from "react";

export default function ToolbarMobile({ setViewHandler, productsCount }) {
	const basicView = 1;
	const optionalView = 2;
	const viewRef1 = useRef();
	const viewRef2 = useRef();

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
		<div className='flex justify-between items-center text-primary-key mt-4 px-2'>
			<span className='text-sm '>{productsCount} products</span>
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
		</div>
	);
}
