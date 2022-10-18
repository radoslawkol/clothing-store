import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ToolbarMobile from "../../ToolbarMobile";
import ProductsContainer from "../../ProductsContainer";
import { useMediaQuery } from "react-responsive";
import ToolbarDesktop from "../../ToolbarDesktop";
import Breadcrumbs from "../../../utils/Breadcrumbs";

export default function PageContainer({ products }) {
	const [isMobileDevice, setIsMobileDevice] = useState();
	const isMobile = useMediaQuery({
		query: "(max-width: 767px)",
	});
	console.log(isMobile);

	useEffect(() => {
		setIsMobileDevice(isMobile);
	}, [isMobile]);

	const router = useRouter();

	const [view, setView] = useState(isMobile ? 1 : 3);

	const breadcrumbs = Object.values(router.query);
	breadcrumbs.unshift("");

	const setViewHandler = (viewNum) => {
		setView(viewNum);
	};

	return (
		<div className='bg-on-primary-key p-2 min-h-[60vh]'>
			<div>
				<Breadcrumbs breadcrumbs={breadcrumbs} />
			</div>
			{isMobileDevice ? (
				<ToolbarMobile
					setViewHandler={setViewHandler}
					productsCount={products.length}
				/>
			) : (
				<ToolbarDesktop
					setViewHandler={setViewHandler}
					productsCount={products?.length}
				/>
			)}

			{products ? (
				<ProductsContainer view={view} products={products} />
			) : (
				<p className='uppercase text-primary-key text-lg text-center m-12'>
					Sorry, we don't have prodcuts for this category.
				</p>
			)}
		</div>
	);
}
