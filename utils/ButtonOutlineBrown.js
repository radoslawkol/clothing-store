import React from "react";

export default function ButtonOutlineBrown({ children }) {
	return (
		<button className='border border-primary-key rounded-md px-2 text-xl hover:bg-primary-key hover:text-on-primary-key duration-300'>
			{children}
		</button>
	);
}
