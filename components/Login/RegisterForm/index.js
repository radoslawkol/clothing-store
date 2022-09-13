import React from "react";
import {
	UserIcon,
	EnvelopeIcon,
	LockClosedIcon,
} from "@heroicons/react/24/outline";
import ButtonPrimary from "../../../utils/ButtonPrimary";
import Link from "next/link";
import FormErrorMessage from "../../../utils/FormErrorMessage";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DateBirthForm from "../BirthDateForm";

const validationSchema = yup.object({
	firstName: yup.string().required("First name is required."),
	lastName: yup.string().required("Last name is required."),
	email: yup
		.string()
		.email("Email must be valid.")
		.lowercase()
		.trim()
		.required("Email is required."),
	password: yup
		.string()
		.required("Password is required")
		.min(6, "Password has to be longer than 6 characters.")
		.max(30, "Password cant' be longer than 30 characters."),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password"), null], "Passwords must match.")
		.required("Confirm password is required."),
});

export default function RegisterForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	const submitHandler = (data) => {
		console.table(data);
	};
	return (
		<form
			className='flex flex-col justify-center items-center gap-6 p-12'
			onSubmit={handleSubmit(submitHandler)}
		>
			<div className='w-full'>
				<label
					htmlFor='firstName'
					className='flex items-center gap-1 border-primary-key border-2 rounded-xl p-1 hover:scale-105 duration-300 cursor-pointer '
				>
					<UserIcon className='w-6 h-6 text-primary-key' />
					<input
						{...register("firstName")}
						type='text'
						placeholder='First Name'
						id='firstName'
						name='firstName'
						className='focus:outline-none '
					/>
				</label>
				<FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
			</div>
			<div className='w-full'>
				<label
					htmlFor='lastName'
					className='flex items-center gap-1 border-primary-key border-2 rounded-xl p-1 hover:scale-105 duration-300 cursor-pointer'
				>
					<UserIcon className='w-6 h-6 text-primary-key' />
					<input
						{...register("lastName")}
						type='text'
						placeholder='Last Name'
						id='lastName'
						name='lastName'
						className='focus:outline-none'
					/>
				</label>
				<FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
			</div>
			<div className='w-full'>
				<label
					htmlFor='email'
					className='flex items-center gap-1 border-primary-key border-2 rounded-xl p-1 hover:scale-105 duration-300 cursor-pointer'
				>
					<EnvelopeIcon className='w-6 h-6 text-primary-key' />
					<input
						{...register("email")}
						type='text'
						placeholder='Email'
						id='email'
						name='email'
						className='focus:outline-none'
					/>
				</label>
				<FormErrorMessage>{errors.email?.message}</FormErrorMessage>
			</div>
			<div className='w-full'>
				<label
					htmlFor='password'
					className='flex items-center gap-1 border-primary-key border-2 rounded-xl p-1 hover:scale-105 duration-300 cursor-pointer'
				>
					<LockClosedIcon className='w-6 h-6 text-primary-key' />
					<input
						{...register("password")}
						type='password'
						placeholder='Password'
						id='password'
						name='password'
						className='focus:outline-none'
					/>
				</label>
				<FormErrorMessage>{errors.password?.message}</FormErrorMessage>
			</div>
			<div className='w-full'>
				<label
					htmlFor='confirmPassword'
					className='flex items-center gap-1 border-primary-key border-2 rounded-xl p-1 hover:scale-105 duration-300 cursor-pointer'
				>
					<LockClosedIcon className='w-6 h-6 text-primary-key' />
					<input
						{...register("confirmPassword")}
						type='password'
						placeholder='Confirm Password'
						id='confirmPassword'
						name='confirmPassword'
						className='focus:outline-none'
					/>
				</label>
				<FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
			</div>
			<DateBirthForm />
			<ButtonPrimary>Sign Up</ButtonPrimary>
			<h3 className='uppercase text-primary-key '>Or sign up with...</h3>
			<button className='border border-primary-key rounded-md px-2 text-xl hover:bg-primary-key hover:text-on-primary-key duration-300'>
				Google
			</button>
		</form>
	);
}
