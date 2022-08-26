import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function productCategory() {
	const router = useRouter();
	const breadcrumbs = Object.values(router.query);
	breadcrumbs.unshift("");
	return (
		<div>
			{breadcrumbs.map((crumb, i) => {
				const link = breadcrumbs.slice(0, i + 1).join("/");
				return (
					<Link href={`${crumb === "" ? "/" : link}`} key={i}>
						<span>
							{crumb === "" ? "home" : ` ${crumb}`}
							{i === breadcrumbs.length - 1 ? "" : " /"}
						</span>
					</Link>
				);
			})}
		</div>
	);
}
