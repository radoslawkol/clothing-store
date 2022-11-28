import React from "react";
import { useRouter } from "next/router";
import AccountSidebar from "../../../components/Account/AccountSidebar";
import AccountContent from "../../../components/Account/AccountContent";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addFavouritesFromDB } from "../../../reducers/favouritesReducer";

export default function AccountPage() {
	const router = useRouter();
	const dispatch = useDispatch();
	const { user } = useSelector((store) => store);
	const { page } = router.query;
	const [activePage, setActivePage] = useState("details");

	useEffect(() => {
		setActivePage(page);
	}, [page]);

	const getUserData = async () => {
		try {
			const { data } = await axios.get(
				`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${user._id}`
			);
			if (data.status === "success") {
				console.log(data.user.favourites);
				dispatch(addFavouritesFromDB(data.user.favourites));
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		if (page === "favourites") {
			getUserData();
		}
	}, [page]);

	return (
		<div className='mt-6'>
			<h1 className='lg:p-6 lg:text-3xl ml-2 mb-4 text-primary-key text-xl font-bold '>
				My Account
			</h1>
			<div className='flex '>
				<AccountSidebar />
				<AccountContent activePage={activePage} />
			</div>
		</div>
	);
}
