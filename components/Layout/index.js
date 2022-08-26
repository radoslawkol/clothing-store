import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ButtonUp from "../../utils/ButtonUp";

export default function Layout({ children }) {
	return (
		<>
			<Navigation />
			<main>{children}</main>
			<ButtonUp />
			<Footer />
		</>
	);
}
