import React from "react";
import deliverTruckIcon from "../../images/delivery-truck.png";
import Image from "next/image";
import LoginLabel from "../Login/LoginLabel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

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
	phone: yup
		.string()
		.matches(/^[0-9]*$/, "Only numbers acceptable.")
		.length(9, "Phone number should have 9 numbers.")
		.trim()
		.required("Phone Number is required."),
	streetAddress: yup
		.string()
		.matches(
			/^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/,
			"Street address should have street and address."
		)
		.trim()
		.required("Street address is required."),
	apt: yup.string().trim(),
	postalCode: yup
		.string()
		.matches(
			/^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/,
			"Postal code should contain numbers and letters."
		)
		.trim()
		.required("Postal code is required."),
	city: yup
		.string()
		.matches(/^([^0-9]*)$/, "City name should contain only letters.")
		.trim()
		.required("City is required."),
	state: yup.string().trim().required("State is required."),
});

export default function AddressForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(validationSchema),
	});

	const [country, setCountry] = useState("default");

	const submitHandler = async () => {};

	return (
		<section>
			<div className='mb-8 flex items-center gap-1 mx-4 mt-6'>
				<h1 className='text-2xl tracking-wide'>Shipping</h1>
				<Image src={deliverTruckIcon} width={50} height={50} />
			</div>
			<form
				className='sm:w-[450px] flex flex-col justify-center items-center gap-4 p-4'
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
					type='text'
					icon='PhoneIcon'
					name='phone'
					placeholder='Phone Number'
					id='phone'
					errors={errors}
					register={register}
				/>
				<LoginLabel
					type='text'
					icon='HomeIcon'
					name='streetAddress'
					placeholder='Street Address'
					id='streetAddress'
					errors={errors}
					register={register}
				/>
				<div className='w-full grid grid-cols-2 gap-2'>
					<LoginLabel
						type='text'
						icon='BuildingOffice2Icon'
						name='apartment'
						placeholder='Apt'
						id='apartment'
						errors={errors}
						register={register}
					/>
					<LoginLabel
						type='text'
						icon='BuildingOffice2Icon'
						name='postalCode'
						placeholder='Postal Code'
						id='postalCode'
						errors={errors}
						register={register}
					/>
				</div>
				<div className='w-full grid grid-cols-2 gap-2'>
					<select
						{...register("state")}
						name='state'
						id='state'
						defaultValue={country}
						className="'w-40 h-9 border-2 border-primary-key rounded-xl  cursor-pointer"
					>
						<option disabled hidden value='default'>
							Select State
						</option>
						<option value='uk'>United Kingdom</option>
						<option value='poland'>Poland</option>
						<option value='poland'>Germany</option>
					</select>
					<LoginLabel
						type='text'
						icon='BuildingOffice2Icon'
						name='city'
						placeholder='City'
						id='city'
						errors={errors}
						register={register}
					/>
				</div>
			</form>
		</section>
	);
}
