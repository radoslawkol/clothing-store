import React from "react";
import { useRouter } from "next/router";
export default function AvaliableColors({ colors, productSKU, productSlug }) {
	const router = useRouter();

	const changeColorHandler = ({ sku }) => {
		console.log(sku);
		console.log(productSKU);
		if (sku !== productSKU) {
			const path = router.asPath.split("/");
			const slug = productSlug.replace(productSKU, sku);

			path.splice(path.length - 1, 1, slug);
			router.push(path.join("/"));
		}
	};
	return (
		<div className='py-2 flex gap-2'>
			{colors.map((color, i) => (
				<button
					key={i}
					style={{ background: color.hex }}
					className={`w-6 h-6 rounded-full border shadow-md hover:scale-105 hover:outline  duration-200 ${
						color.sku === productSKU && "outline outline-2"
					}`}
					onClick={() => changeColorHandler(color)}
				></button>
			))}
		</div>
	);
}
