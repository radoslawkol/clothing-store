import Link from "next/link";
import React from "react";

export default function ButtonPrimary({ width, href = "/", children }) {
	return (
		<Link href={href}>
			<button
				className={`${
					width === "full" && "w-full"
				} bg-primary-key rounded-md text-on-primary-key py-2 px-6 text-sm tracking-wide uppercase font-light hover:scale-105 duration-300`}
			>
				{children}
			</button>
		</Link>
	);
}
