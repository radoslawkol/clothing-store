import React from "react";
import { useRouter } from "next/router";
import AccountSidebar from "../../../components/Account/AccountSidebar";
import AccountContent from "../../../components/Account/AccountContent";
import { useState } from "react";
import { useEffect } from "react";

export default function AccountPage({ setPage }) {
	const router = useRouter();
	const { page } = router.query;
	console.log(page);
	const [activePage, setActivePage] = useState("details");

	useEffect(() => {
		setActivePage(page);
	}, [page]);

	return (
		<div className='mt-6'>
			<h1 className='lg:p-6 lg:text-3xl ml-2 mb-4 text-primary-key text-xl font-bold'>
				My Account
			</h1>
			<div className='flex'>
				<AccountSidebar />
				<AccountContent activePage={activePage} />
			</div>
		</div>
	);
}
