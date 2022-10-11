import Link from "next/link";
import React from "react";
import {
	ShoppingBagIcon,
	UserCircleIcon,
	ClipboardDocumentIcon,
	HeartIcon,
	Cog8ToothIcon,
} from "@heroicons/react/24/outline";

export default function AccountSidebar() {
	return (
		<nav className='p-2 lg:p-6'>
			<ul className='flex flex-col gap-1 lg:gap-3'>
				<Link href='/account/details'>
					<li className='flex items-center gap-1 text-primary-key bg-primary rounded-full p-1 cursor-pointer hover:bg-secondary duration-300'>
						<UserCircleIcon className='text-primary-key w-6 h-6' />
						<span className='hidden md:block'>My details</span>
					</li>
				</Link>
				<Link href='/checkout'>
					<li className='flex items-center gap-1 text-primary-key bg-primary rounded-full p-1 cursor-pointer hover:bg-secondary duration-300'>
						<ShoppingBagIcon className='text-primary-key w-6 h-6' />
						<span className='hidden md:block'>My Bag</span>
					</li>
				</Link>
				<Link href='/account/orders'>
					<li className='flex items-center gap-1 text-primary-key bg-primary rounded-full p-1 cursor-pointer hover:bg-secondary duration-300'>
						<ClipboardDocumentIcon className='text-primary-key w-6 h-6' />
						<span className='hidden md:block'>My orders</span>
					</li>
				</Link>
				<Link href='/account/favourites'>
					<li className='flex items-center gap-1 text-primary-key bg-primary rounded-full p-1 cursor-pointer hover:bg-secondary duration-300'>
						<HeartIcon className='text-primary-key w-6 h-6' />
						<span className='hidden md:block'>Favourites</span>
					</li>
				</Link>
				<Link href='/account/settings'>
					<li className='flex items-center gap-1 text-primary-key bg-primary rounded-full p-1 cursor-pointer hover:bg-secondary duration-300'>
						<Cog8ToothIcon className='text-primary-key w-6 h-6' />
						<span className='hidden md:block'>Settings</span>
					</li>
				</Link>
			</ul>
		</nav>
	);
}
