import React, { useRef, useState } from "react";

export default function Newsletter() {
	const [isPolicyAccepted, setIsPolicyAccepted] = useState(false);
	const acceptInput = useRef();

	const acceptPolicy = () => {
		setIsPolicyAccepted((prev) => !prev);
	};
	return (
		<div>
			<input
				type='email'
				placeholder='Email'
				className='pl-2 p-1 rounded-2xl focus:outline-none focus:border focus:border-primary-key'
			/>
			<div
				onClick={acceptPolicy}
				className='cursor-pointer flex items-center gap-1 mt-2 w-max mb-3'
			>
				<input
					type='checkbox'
					name='policy'
					id='policy'
					ref={acceptInput}
					defaultChecked={isPolicyAccepted}
					className=''
				/>
				<span className='text-sm'>Accept newsletter policy</span>
			</div>
			<button className='bg-primary-key rounded-md text-on-primary-key p-2 text-sm tracking-wide uppercase font-light hover:scale-105 duration-300'>
				Sign up
			</button>
		</div>
	);
}
