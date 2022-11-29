import React from "react";
import { useRef, useEffect, useState } from "react";

export default function ToolbarDesktop({ setViewHandler, productsCount }) {
	const basicView = 3;
	const optionalView = 4;
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

	useEffect(() => {});

	return (
		<div className='relative flex justify-between items-center text-primary-key mt-4 mx-2'>
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
