import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Account() {
	const router = useRouter();
	const { user } = useSelector((store) => store);
	const [userData, setUserData] = useState({
		name: "",
		email: "",
	});

	useEffect(() => {
		setUserData({
			name: user.firstName,
			email: user.email,
		});
		setTimeout(() => {
			router.push("/account/details");
		}, 2000);
	}, []);

	return (
		<div className='h-[60vh] flex  flex-col justify-center items-center gap-4'>
			<p className='text-xl text-center tracking-wider'>
				Welcome to your account, {userData.name}
			</p>
			<strong>{userData.email}</strong>
		</div>
	);
}
