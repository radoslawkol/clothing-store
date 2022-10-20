import React from "react";
import { useState } from "react";
import Image from "next/image";

export default function ProductSlider({ image }) {
	const [sliderIndex, setSliderIndex] = useState(0);

	return (
		<div className='md:w-3/4 flex justify-center'>
			<div className='lg:flex gap-4'>
				<div className='relative w-[280px] h-[350px] sm:w-[350px] sm:h-[450px] lg:w-[450px] lg:h-[600px] lg:order-1'>
					<Image
						src={image?.[sliderIndex]}
						layout='fill'
						className='object-cover'
					/>
				</div>
				<div className=' my-4 lg:my-0 flex lg:flex-col items-center  gap-4'>
					{image.map((img, i) => (
						<div className='relative w-[60px] h-[80px]' key={i}>
							<Image
								src={img}
								layout='fill'
								className={`cursor-pointer object-cover `}
								onClick={() => setSliderIndex(i)}
							/>
							{i === sliderIndex && (
								<div className='absolute top-0 left-0 w-full h-full bg-primary-key opacity-[70%] z-10'></div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
