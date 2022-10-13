import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DateBirthForm from "../Login/BirthDateForm";
import { useSelector } from "react-redux";
import LoginLabel from "../Login/LoginLabel";
import ButtonPrimary from "../../utils/ButtonPrimary";

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
	birthDay: yup.string().required("Birth day is required."),
	birthMonth: yup.string().required("Birth month is required."),
	birthYear: yup.string().required("Birth year is required."),
});

export default function AccountDetails() {
	const { firstName, lastName, email } = useSelector(
		(store) => store.user || {}
	);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(validationSchema),
		defaultValues: {
			firstName,
			lastName,
			email,
		},
	});

	const submitHandler = async () => {};

	return (
		<section className='sm:w-3/4 md:ml-6 lg:w-1/2 h-[72vh]'>
			<h2 className='text-lg font-thin tracking-wider text-primary-key mx-2 mb-4'>
				My Details
			</h2>
			<div className='p-2 md:w-3/4'>
				<h4 className='font-bold text-primary-key'>Personal information</h4>
				<p className='text-sm my-2'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
					impedit soluta et alias culpa ut placeat in voluptate aut, veniam eius
					deserunt quo sit eos sequi nesciunt dicta recusandae quis?
				</p>
			</div>
			<form
				onSubmit={handleSubmit(submitHandler)}
				className='p-4 flex flex-col gap-2 md:w-3/4'
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
				<DateBirthForm register={register} />
				<div className='mt-4'>
					<ButtonPrimary>Save</ButtonPrimary>
				</div>
			</form>
		</section>
	);
}
