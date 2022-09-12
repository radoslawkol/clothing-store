import React from "react";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import ButtonPrimary from "../../../utils/ButtonPrimary";
import Link from "next/link";

export default function LoginForm() {
	return (
		<form className='flex flex-col justify-center items-center gap-6 p-8 '>
			<label
				htmlFor='email'
				className='flex items-center gap-1 border-primary-key border-2 rounded-xl p-1 hover:scale-105 duration-300 cursor-pointer'
			>
				<EnvelopeIcon className='w-6 h-6 text-primary-key' />
				<input
					type='email'
					placeholder='Email'
					id='email'
					className='focus:outline-none'
				/>
			</label>
			<label
				htmlFor='password'
				className='flex items-center gap-1  border-primary-key border-2 rounded-xl p-1 hover:scale-105 duration-300 cursor-pointer'
			>
				<LockClosedIcon className='w-6 h-6 text-primary-key' />
				<input
					type='password'
					placeholder='Password'
					id='password'
					className='focus:outline-none'
				/>
			</label>
			<ButtonPrimary>Sign in</ButtonPrimary>

			<Link href='/resetPassword'>
				<p className='text-primary-key  text-sm cursor-pointer hover:font-bold duration-400'>
					Forgot password?
				</p>
			</Link>

			<h3 className='uppercase text-primary-key '>Or sign in with...</h3>
			<button className='border border-primary-key rounded-md px-2 text-xl hover:bg-primary-key hover:text-on-primary-key duration-300'>
				Google
			</button>
		</form>
	);
}
