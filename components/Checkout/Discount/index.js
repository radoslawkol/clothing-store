import React from "react";
import ButtonOutlineBrown from "../../../utils/ButtonOutlineBrown";

export default function Discount() {
	return (
		<div className='text-primary-key mt-6 '>
			<p className='uppercase'>I have discount code</p>
			<div className='flex items-center gap-2'>
				<input
					type='text'
					placeholder='Discount code'
					className='border-b focus:outline-none my-4 focus:border-primary-key p-1 rounded-sm'
				/>
				<ButtonOutlineBrown>Add</ButtonOutlineBrown>
			</div>
		</div>
	);
}
