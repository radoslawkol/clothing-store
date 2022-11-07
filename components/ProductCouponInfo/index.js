import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProductCouponInfo() {
	const [discountCode, setDiscountCode] = useState({});
	const getDiscountCode = async () => {
		try {
			const { data } = await axios.get(
				`${process.env.NEXT_PUBLIC_BASE_URL}/api/discounts`
			);

			if (data.status === "success") {
				setDiscountCode(data.code);
			}
		} catch (err) {
			console.error(err.message);
		}
	};
	useEffect(() => {
		getDiscountCode();
	}, []);
	return (
		<div className='text-center bg-info-primary text-info-on-primary p-3 rounded-lg my-2 sm:w-96 md:w-72 xl:w-96 xl:my-6'>
			{discountCode ? (
				<>
					<p>GET UP TO {discountCode.discount}% OFF EVERYTHING!</p>
					<p>Use code: {discountCode.code}</p>
				</>
			) : (
				<p>Check if there are any discount codes. Send us a message.</p>
			)}
		</div>
	);
}
