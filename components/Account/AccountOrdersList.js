import React from "react";
export default function AccountOrdersList({ orders }) {
	return (
		<div className='w-full'>
			<h3 className='mb-4 text-primary-key text-lg'>Orders</h3>
			<div>
				<table className=' border-collapse border-2 border-primary w-full xl:w-[400px] '>
					<thead>
						<tr className='text-sm text-primary-key border-b-2'>
							<th className='p-3'>Order ID</th>
							<th>Price</th>
							<th className='hidden sm:table-cell'>Amount</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody className='text-center'>
						{orders
							?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
							.map((order) => {
								const date = new Date(order.createdAt);
								return (
									<tr
										className='border-b even:bg-primary odd:bg-white text-primary-key'
										key={order._id}
									>
										<td className='p-2 md:px-4 '>{order._id.slice(-8)}</td>
										<td>${order.total}</td>
										<td className='hidden sm:table-cell'>{order.amount}</td>
										<td>{`${date.getDate()}-${
											date.getMonth() + 1
										}-${date.getFullYear()}`}</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
