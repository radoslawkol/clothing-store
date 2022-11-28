import React from "react";

export default function AccountOrdersSummary({ ordersInfo }) {
	return (
		<div>
			<h3 className='mb-4 text-primary-key text-lg'>Summary</h3>
			<ul className='flex flex-col gap-2 text-primary-key mb-8 border p-2 rounded-md shadow'>
				<li className='flex justify-between uppercase'>
					All orders <span>{ordersInfo?.ordersAmount}</span>
				</li>
				<li className='flex justify-between uppercase'>
					Shipping <span>${ordersInfo?.totalShippingCost?.toFixed(2)}</span>
				</li>

				<hr />
				<li className='flex justify-between uppercase font-bold'>
					Total <span>${ordersInfo?.total?.toFixed(2)}</span>
				</li>
			</ul>
		</div>
	);
}
