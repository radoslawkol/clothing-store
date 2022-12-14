import React, { useEffect } from "react";
import deliverTruckIcon from "../../images/delivery-truck.png";
import Image from "next/image";
import LoginLabel from "../Login/LoginLabel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../../reducers/addressReducer";
import Cookies from "js-cookie";
import validationSchema from "../../utils/AddressFormValidSchema";
import ButtonPrimary from "../../utils/ButtonPrimary";

export default function AddressForm({ setIsShippingFormValid }) {
	const dispatch = useDispatch();
	const { address } = useSelector((store) => store);
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm({
		mode: "onChange",
		defaultValues: {
			firstName: address.firstName ? address.firstName : "",
			lastName: address.lastName ? address.lastName : "",
			email: address.email ? address.email : "",
			phoneNumber: address.phoneNumber ? address.phoneNumber : "",
			streetAddress: address.streetAddress ? address.streetAddress : "",
			apt: address.apt ? address.apt : "",
			postalCode: address.postalCode ? address.postalCode : "",
			state: address.state ? address.state : "poland",
			city: address.city ? address.city : "",
		},
		resolver: yupResolver(validationSchema),
	});

	const submitHandler = () => {
		setIsShippingFormValid(true);
		dispatch(addAddress(getValues()));
		Cookies.set("address", JSON.stringify(getValues()));
	};
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
					name='phoneNumber'
					placeholder='Phone Number'
					id='phoneNumber'
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
						name='apt'
						placeholder='Apt'
						id='apt'
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
						className="'w-40 h-9 border-2 border-primary-key rounded-xl  cursor-pointer"
					>
						<option value='poland'>Poland</option>
						<option value='poland'>Germany</option>
						<option value='uk'>United Kingdom</option>
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
				<ButtonPrimary width={"full"}>Confirm</ButtonPrimary>
			</form>
		</section>
	);
}
