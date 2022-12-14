import React from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
export default function ButtonUp() {
	const goUpHandler = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};
	return (
		<button
			className='z-[1000] fixed bottom-12 right-2 flex items-center justify-center bg-primary-key rounded-3xl p-2 w-10 h-10'
			onClick={goUpHandler}
		>
			<ChevronDoubleUpIcon className='w-6 h-6 text-on-primary-key' />
		</button>
	);
}
