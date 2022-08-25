import React from "react";

export default function MostPopular() {
	return (
		<div className='text-center'>
			<h3 className='text-primary-key font-light mb-2'>Most Popular</h3>
			<div className='flex gap-3 text-sm flex-wrap gap-y-1'>
				<button className='p-2 border border-primary-key rounded-lg hover:bg-on-primary hover:text-on-primary-key duration-300'>
					t-shirts
				</button>
				<button className='p-2 border border-primary-key rounded-lg hover:bg-on-primary hover:text-on-primary-key duration-300'>
					hoodies
				</button>
				<button className='p-2 border border-primary-key rounded-lg hover:bg-on-primary hover:text-on-primary-key duration-300'>
					jeans
				</button>
			</div>
		</div>
	);
}
