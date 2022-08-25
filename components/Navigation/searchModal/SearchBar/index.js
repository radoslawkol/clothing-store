import React, { useEffect, useRef } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar() {
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.focus();
	}, []);
	return (
		<div className='flex items-center gap-2  border-b-2 border-primary-key'>
			<MagnifyingGlassIcon className='w-6 h-6 text-primary-key' />
			<input
				ref={inputRef}
				type='text'
				placeholder='Search...'
				className='px placeholder:text-primary-key focus:outline-0 text-primary-key'
			/>
		</div>
	);
}
