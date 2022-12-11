import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import AccountDeliveryAddress from "./AccountDeliveryAddress";
import AccountOrdersList from "./AccountOrdersList";
import AccountOrdersSummary from "./AccountOrdersSummary";

export default function AccountOrders() {
	const { user } = useSelector((store) => store);
	const [ordersInfo, setOrdersInfo] = useState({});
	const [orders, setOrders] = useState([]);

	const getOrdersInfo = async () => {
		try {
			const { data } = await axios.get(
				`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders?userId=${user._id}`
			);
			if (data.status === "success") {
				setOrdersInfo(data.ordersInfo);
				setOrders(data.orders);
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getOrdersInfo();
	}, []);

	return (
		<section className='md:p-6 lg:m-auto '>
			<h2 className='text-lg  px- 2 lg:px-12 font-thin tracking-wider text-primary-key mb-4'>
				My orders
			</h2>
			<div className='p-2 lg:px-8 flex flex-col xl:flex-row gap-6 lg:gap-20 xl:h-screen pb-28 xl:pb-0'>
				<div className='xl:order-1'>
					<AccountOrdersSummary ordersInfo={ordersInfo} />
					<AccountOrdersList orders={orders} />
				</div>
				<AccountDeliveryAddress />
			</div>
		</section>
	);
}
