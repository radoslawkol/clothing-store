import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ToolbarMobile from "../../ToolbarMobile";
import ProductsContainer from "../../ProductsContainer";
import useMediaQuery from "react-responsive";

export default function PageContainer() {
	const isMobile = useMediaQuery({
		query: "(max-width: 767px)",
	});
	const router = useRouter();

	const [view, setView] = useState(isMobile ? 1 : 3);

	const breadcrumbs = Object.values(router.query);
	breadcrumbs.unshift("");

	const setViewHandler = (viewNum) => {
		setView(viewNum);
	};

	return (
		<div className='bg-on-primary-key p-2'>
			<div>
				{breadcrumbs.map((crumb, i) => {
					const link = breadcrumbs.slice(0, i + 1).join("/");
					return (
						<Link href={`${crumb === "" ? "/" : link}`} key={i}>
							<span className='text-primary-key text-sm cursor-pointer hover:font-bold hover:duration 300'>
								{crumb === "" ? "home" : ` ${crumb}`}
								{i === breadcrumbs.length - 1 ? "" : " /"}
							</span>
						</Link>
					);
				})}
				<span className='text-primary-key text-sm'></span>
			</div>
			<ToolbarMobile setViewHandler={setViewHandler} view={view} />
			<ProductsContainer view={view} />
		</div>
	);
}
