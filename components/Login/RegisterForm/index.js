import React from "react";
import ButtonPrimary from "../../../utils/ButtonPrimary";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DateBirthForm from "../BirthDateForm";
import LoginLabel from "../LoginLabel";
import ButtonOutlineBrown from "../../../utils/ButtonOutlineBrown";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";

const validationSchema = yup.object({
	firstName: yup
		.string()
		.required("First name is required.")
		.matches(
			/^[^\u4E00-\u9FBF\u3040-\u309f\u30A0-\u30FF]+$/,
			"First name can only contain alphabets."
		),
	lastName: yup
		.string()
		.required("Last name is required.")
		.matches(
			/^[^\u4E00-\u9FBF\u3040-\u309f\u30A0-\u30FF]+$/,
			"First name can only contain alphabets."
		),
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
	birthDay: yup.string().required("Birth day is required."),
	birthMonth: yup.string().required("Birth month is required."),
	birthYear: yup.string().required("Birth year is required."),
});

export default function RegisterForm() {
	const dispatch = useDispatch();
	const router = useRouter();
	const [error, setError] = useState("");
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(validationSchema),
	});

	const submitHandler = async (formData) => {
		try {
			const {
				firstName,
				lastName,
				email,
				password,
				confirmPassword,
				birthDay,
				birthMonth,
				birthYear,
			} = formData;

			const { data } = await axios.post("/api/auth/register", {
				firstName,
				lastName,
				email,
				password,
				birthYear: +birthYear,
				birthMonth: +birthMonth,
				birthDay: +birthDay,
			});

			console.log(data);

			if (data.status === "success") {
				router.push("/account");
				Cookies.set("user", JSON.stringify(data.data), { expires: 30 });
				dispatch({ type: "REGISTER", payload: data.data });
			}
		} catch (err) {
			console.log(err);
			setError(err.response.data.message);
		}
	};
	return (
		<form
			data-testid='registerForm'
			className='flex flex-col justify-center items-center gap-6 p-12 '
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

			<DateBirthForm register={register} />
			<ButtonPrimary>Sign Up</ButtonPrimary>

			{error && <p className='text-error-primary-key'>{error}</p>}

			<h3 className='uppercase text-primary-key '>Or sign up with...</h3>
			<ButtonOutlineBrown>Google</ButtonOutlineBrown>
		</form>
	);
}
