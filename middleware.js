import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import * as jose from "jose";

export async function middleware(req) {
	try {
		const user = req.cookies.get("user")
			? JSON.parse(req.cookies.get("user"))
			: false;

		const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

		if (req.url.includes("login") && user.token) {
			return NextResponse.rewrite(new URL("/", req.url));
		}

		if (!user.token) {
			return NextResponse.rewrite(new URL("/login", req.url));
		} else {
			const { payload } = await jose.jwtVerify(user.token, secret);

			console.log(req.url);
			if (!req.url.contains("account")) {
				return NextResponse.rewrite(new URL("/account", req.url));
			}
		}
	} catch (err) {
		console.log(err);
	}
}

export const config = {
	matcher: ["/account/:page*", "/shipping", "/login"],
};
