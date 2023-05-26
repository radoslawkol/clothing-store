import React from "react";
import ButtonPrimary from "../../../utils/ButtonPrimary";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ButtonOutlineBrown from "../../../utils/ButtonOutlineBrown";
import LoginLabel from "../LoginLabel";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
	const dispatch = useDispatch();
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(validationSchema),
		defaultValues: {
			email: "tevefo1821@syswift.com",
			password: "123456",
		},
	});

	const submitHandler = async (formData) => {
		const { password, email } = formData;
		try {
			const { data } = await axios.post("/api/auth/login", {
				email,
				password,
			});
			if (data.status === "success") {
				router.push("/account");
				Cookies.set("user", JSON.stringify(data.data), { expires: 30 });
				dispatch({ type: "LOGIN", payload: data.data });
			}
		} catch (err) {
			console.log(err);
			toast.error(err.response.data.message);
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
