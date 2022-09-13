import React from "react";

export default function FormErrorMessage({ children }) {
	return (
		<p className='text-error-primary-key text-sm text-center mt-1'>
			{children}
		</p>
	);
}
