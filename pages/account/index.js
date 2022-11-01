import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Account({ user }) {
	const router = useRouter();

	useEffect(() => {
		router.push("/account/details");
	}, []);
	return <p>Welcome to your account</p>;
}

export async function getStaticProps() {
	const { data } = await axios.get(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`
	);

	return {
		props: {},
	};
}
