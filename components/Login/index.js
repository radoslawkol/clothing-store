import React from "react";
import { useForm } from "react-hook-form";
import LoginForm from "./LoginForm";

export default function Login() {
	return (
		<div className='contentWithoutMenuHeight flex items-center justify-center bg-secondary'>
			<div className=' bg-on-primary-key rounded-md  w-96 py-2 drop-shadow-lg'>
				<div className='grid grid-cols-2 gap-4 justify-evenly divide-x-2  divide-primary-key text-primary-key text-xl '>
					<button className='uppercase tracking-wide'>Sign up</button>
					<button className='uppercase tracking-wide font-semibold'>
						Sign in
					</button>
				</div>
				<div className='h-[2px] w-80 bg-primary-key m-auto mt-1'></div>
				<LoginForm />
			</div>
		</div>
	);
}
