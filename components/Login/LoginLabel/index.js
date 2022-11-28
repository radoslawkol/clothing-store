import React from "react";
import FormErrorMessage from "../../../utils/FormErrorMessage";
import InputIcon from "./InputIcon";
export default function LoginLabel({
	type,
	icon,
	name,
	placeholder,
	id,
	register,
	errors,
}) {
	return (
		<div className='w-full'>
			<label
				htmlFor={name}
				className='flex items-center gap-1 border-primary-key border-2 rounded-xl p-1 hover:scale-105 duration-300 cursor-pointer '
			>
				<InputIcon icon={icon} />
				<input
					{...register(name, { shouldUnregister: true })}
					type={type}
					placeholder={placeholder}
					id={id}
					name={name}
					className='focus:outline-none w-full'
				/>
			</label>
			<FormErrorMessage>{errors[name]?.message}</FormErrorMessage>
		</div>
	);
}
