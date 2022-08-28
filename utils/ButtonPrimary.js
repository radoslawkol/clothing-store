import React from "react";

export default function ButtonPrimary({ children }) {
	return (
		<button className=' bg-primary-key rounded-md text-on-primary-key py-2 px-6 text-sm tracking-wide uppercase font-light hover:scale-105 duration-300'>
			{children}
		</button>
	);
}
