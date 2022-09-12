import React from "react";
import Layout from "../../components/Layout";
import Login from "../../components/Login";

export default function LoginPage() {
	return (
		<Layout>
			<Login />
			<hr className='bg-primary-key w-full h-1' />
		</Layout>
	);
}
