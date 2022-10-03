import React from "react";
import ButtonPrimary from "../../../utils/ButtonPrimary";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ButtonOutlineBrown from "../../../utils/ButtonOutlineBrown";
import LoginLabel from "../LoginLabel";

const validationSchema = yup.object({
	email: yup
		.string()
		.email("Email must be valid.")
		.lowercase()
		.trim()
		.required("Email is required."),
	password: yup.string().required("Password is required"),
});

export default function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(validationSchema),
	});

	const submitHandler = async (data) => {
		console.log(data);
		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				body: JSON.stringify(data),
			});
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<form
			data-testid='loginForm'
			className='flex flex-col justify-center items-center gap-6 p-12 loginForm'
			onSubmit={handleSubmit(submitHandler)}
		>
			<LoginLabel
				type='text'
				icon='EnvelopeIcon'
				name='email'
				placeholder='Email'
				id='email'
				errors={errors}
				register={register}
			/>

			<LoginLabel
				type='password'
				icon='LockClosedIcon'
				name='password'
				placeholder='Password'
				id='password'
				errors={errors}
				register={register}
			/>

			<ButtonPrimary>Sign in</ButtonPrimary>

			<Link href='/account/resetPassword'>
				<p className='text-primary-key  text-sm cursor-pointer hover:font-bold duration-400'>
					Forgot password?
				</p>
			</Link>

			<h3 className='uppercase text-primary-key '>Or sign in with...</h3>
			<ButtonOutlineBrown>Google</ButtonOutlineBrown>
		</form>
	);
}
