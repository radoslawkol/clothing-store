import React from "react";
import Link from "next/link";

export default function Breadcrumbs({ breadcrumbs }) {
	return breadcrumbs.map((crumb, i) => {
		const link = breadcrumbs.slice(0, i + 1).join("/");
		return (
			<Link href={`${crumb === "" ? "/" : link}`} key={i}>
				<span className='text-primary-key text-sm cursor-pointer hover:font-bold hover:duration 300'>
					{crumb === "" ? "home" : ` ${crumb}`}
					{i === breadcrumbs.length - 1 ? "" : " /"}
				</span>
			</Link>
		);
	});
}
