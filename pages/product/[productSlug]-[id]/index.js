import React from "react";
import { useRouter } from "next/router";

export default function ProductPage() {
	const router = useRouter();
	console.log(router);
	const { productSlug, id } = router.query; // its undefined beacause i dont' have data fetching yet
	console.log(productSlug, id);
	return <div className='p-6'>ProductPage</div>;
}
