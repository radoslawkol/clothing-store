import React from "react";
import Link from "next/link";
export default function MostPopular() {
	return (
		<div className='text-center mt-4'>
			<h3 className='text-primary-key font-light mb-2'>Most Popular</h3>
			<div className='flex gap-6 mt-6'>
				<div>
					<h4>Man</h4>
					<div className='flex gap-3 text-sm flex-wrap justify-center gap-y-1 mt-2'>
						<Link href='/man/clothing/t-shirts'>
							<button className='p-2 border border-primary-key rounded-lg hover:bg-on-primary hover:text-on-primary-key duration-300'>
								t-shirts
							</button>
						</Link>

						<Link href='/man/clothing/jeans'>
							<button className='p-2 border border-primary-key rounded-lg hover:bg-on-primary hover:text-on-primary-key duration-300'>
								jeans
							</button>
						</Link>
					</div>
				</div>
				<div>
					<h4>Woman</h4>
					<div className='flex gap-3 justify-center text-sm flex-wrap gap-y-1 mt-2'>
						<Link href='/woman/clothing/jeans'>
							<button className='p-2 border border-primary-key rounded-lg hover:bg-on-primary hover:text-on-primary-key duration-300'>
								jeans
							</button>
						</Link>

						<Link href='/woman/clothing/skirts'>
							<button className='p-2 border border-primary-key rounded-lg hover:bg-on-primary hover:text-on-primary-key duration-300'>
								skirts
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
