import React from "react";
import Image from "next/image";
import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function ProductCard() {
	return (
		<article className='relative flex w-full rounded-lg shadow-lg '>
			<Link href={`/man/clothing/jeans/bluejeans`}>
				<div className='relative w-1/3 sm:w-1/4 md:w-[20%] lg:h-36'>
					<Image
						src={`https://cdn.pixabay.com/photo/2017/08/06/09/51/bag-2590799_960_720.jpg`}
						alt='product name'
						layout='fill'
						className='w-20 h-full rounded-l-lg object-cover bg-center cursor-pointer'
					/>
				</div>
			</Link>

			<div className='text-primary-key p-2'>
				<div>
					<h3 className='text-lg lg:text-xl mb-2'>Jeans</h3>
					<span className='block text-[12px] lg:text-sm'>color: blue</span>
					<span className='text-[12px] lg:text-sm'>size: M</span>
				</div>
				<div className='mt-2 flex items-center gap-1'>
					<button className='text-lg px-1 h-6 bg-primary hover:bg-primary-key duration-300 hover:text-on-primary-key rounded-md'>
						<MinusIcon className='h-3 w-3' />
					</button>
					<span>1</span>
					<button className='text-lg px-1 h-6 bg-primary hover:bg-primary-key duration-300 hover:text-on-primary-key rounded-md'>
						<PlusIcon className='h-3 w-3' />
					</button>
				</div>
			</div>
			<button className='absolute top-2 right-2 '>
				<TrashIcon className='w-4 h-4 text-primary-key' />
			</button>
			<strong className='absolute bottom-2 right-2 text-primary-key'>
				$39.45
			</strong>
		</article>
	);
}