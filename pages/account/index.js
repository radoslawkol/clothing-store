import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Account() {
	const router = useRouter();

	useEffect(() => {
		router.push("/account/details");
	}, []);
	return <p>Welcome to your account</p>;
}
