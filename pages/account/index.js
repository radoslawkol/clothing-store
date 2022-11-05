import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Account({ user }) {
	const router = useRouter();

	useEffect(() => {
		router.push("/account/details");
	}, []);

	return <p>Welcome to your account</p>;
}

