import React from "react";
import AccountDetails from "./AccountDetails";
import AccountOrders from "./AccountOrders";
import AccountFavourites from "./AccountFavourites";
import AccountSettings from "./AccountSettings";
import { getStaticProps } from "../../pages/[gender]/[category]";

export default function AccountContent({ user, activePage }) {
	if (activePage == undefined || activePage === "details") {
		return <AccountDetails />;
	} else if (activePage === "orders") {
		return <AccountOrders />;
	} else if (activePage === "favourites") {
		return <AccountFavourites />;
	} else if (activePage === "settings") {
		return <AccountSettings />;
	}
}
