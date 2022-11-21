import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LoginLabel from "../Login/LoginLabel";
import ButtonPrimary from "../../utils/ButtonPrimary";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const validationSchema = yup.object({
	currentPassword: yup
		.string()
		.required("Password is required")
		.min(6, "Password has to be longer than 6 characters.")
		.max(30, "Password cant' be longer than 30 characters."),
	newPassword: yup
		.string()
		.required("New Password is required")
		.min(6, "Password has to be longer than 6 characters.")
		.max(30, "Password cant' be longer than 30 characters."),
});

export default function ChangePasswordForm() {
	const router = useRouter();
	const { user } = useSelector((store) => store);
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(validationSchema),
	});

	const submitHandler = async () => {
		const { currentPassword, newPassword } = getValues();
		try {
			const { data } = await axios.patch(
				`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/changePassword`,
				{
					currentPassword,
					newPassword,
				},
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);

			console.log(data);

			if (data.status === "success") {
				toast.success("Your password was changed successfully");
				Cookies.set("user", "");
				router.push("/");
			}
		} catch (err) {
			console.log(err);
			toast.error("Pass correct password.");
		}
	};
	return (
		<div className='p-2'>
			<h4 className='font-bold text-primary-key'>Change password</h4>
			<form
				onSubmit={handleSubmit(submitHandler)}
				className='my-4 flex flex-col gap-2'
			>
				<LoginLabel
					type='password'
					icon='LockClosedIcon'
					name='currentPassword'
					placeholder='Current Password'
					id='currentPassword'
					errors={errors}
					register={register}
				/>

				<LoginLabel
					type='password'
					icon='LockClosedIcon'
					name='newPassword'
					placeholder='New password'
					id='newPassword'
					errors={errors}
					register={register}
				/>
				<div>
					<ButtonPrimary>Change</ButtonPrimary>
				</div>
			</form>
		</div>
	);
}
