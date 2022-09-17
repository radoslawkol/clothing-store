import React from "react";
import ButtonPrimary from "../../../utils/ButtonPrimary";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DateBirthForm from "../BirthDateForm";
import LoginLabel from "../LoginLabel";
import ButtonOutlineBrown from "../../../utils/ButtonOutlineBrown";

const validationSchema = yup.object({
	firstName: yup.string().required("First name is required."),
	lastName: yup.string().required("Last name is required."),
	email: yup
		.string()
		.email("Email hast to be valid.")
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
			className='flex flex-col justify-center items-center gap-6 p-12 registerForm'
			onSubmit={handleSubmit(submitHandler)}
		>
			<LoginLabel
				type='text'
				icon='UserIcon'
				name='firstName'
				placeholder='First Name'
				id='firstName'
				errors={errors}
				register={register}
			/>

			<LoginLabel
				type='text'
				icon='UserIcon'
				name='lastName'
				placeholder='Last Name'
				id='lastName'
				errors={errors}
				register={register}
			/>

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

			<LoginLabel
				type='password'
				icon='LockClosedIcon'
				name='confirmPassword'
				placeholder='Confirm Password'
				id='confirmPassword'
				errors={errors}
				register={register}
			/>

			<DateBirthForm />
			<ButtonPrimary>Sign Up</ButtonPrimary>

			<h3 className='uppercase text-primary-key '>Or sign up with...</h3>
			<ButtonOutlineBrown>Google</ButtonOutlineBrown>
		</form>
	);
}
