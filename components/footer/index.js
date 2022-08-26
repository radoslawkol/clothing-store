import React from "react";
import Newsletter from "./Newsletter";
export default function Footer() {
	return (
		<footer className='bg-secondary text-on-secondary'>
			<div className='flex flex-col gap-6 p-4 lg:flex-row lg:justify-center lg:gap-20 lg:p-10'>
				<div className='lg:order-1'>
					<h3 className='text-xl fonr-bold mb-2 text-primary-key'>
						Newsletter
					</h3>
					<p className='mb-3 max-w-md lg:max-w-xl'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
						totam atque voluptate veniam voluptatibus quam similique placeat
						sint provident quaerat.
					</p>
					<Newsletter />
				</div>
				<div>
					<h3 className='text-xl fonr-bold mb-2 text-primary-key'>
						Help & Information
					</h3>
					<ul>
						<li>Help</li>
						<li>Track order</li>
						<li>Delivery and returns</li>
						<li>Discounts</li>
					</ul>
				</div>
				<div>
					<h3 className='text-xl fonr-bold mb-2 text-primary-key'>About us</h3>
					<ul>
						<li>About us</li>
						<li>Careers</li>
						<li>Mobile app</li>
						<li>Corporate responsibility</li>
					</ul>
				</div>
			</div>
			<div className='bg-secondary-key p-2 flex justify-between'>
				<span className='text-sm'>
					ClothesShop &copy;2022 | All rights reserved
				</span>
				<span className='text-sm'>Cookies Policy</span>
			</div>
		</footer>
	);
}
