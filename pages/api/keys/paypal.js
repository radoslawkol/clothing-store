import paypal from "@paypal/checkout-server-sdk";
import jwt from "jsonwebtoken";
import Cart from "../../../database/models/Cart";

let clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
let clientSecret = process.env.NEXT_PUBLIC_PAYPAL_SECRET;

let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
let client = new paypal.core.PayPalHttpClient(environment);

export default async function handler(req, res) {
	try {
		if (req.method === "POST") {
			// const { value } = req.body;
			const { authorization } = req.headers;

			if (!authorization) {
				return res.status(403).json({
					status: "fail",
					message: "You are not authorized.",
				});
			}
			const token = authorization.split(" ")[1];

			const userId = jwt.verify(token, process.env.JWT_SECRET_KEY);

			const cart = await Cart.findOne({ user: userId }).select();

			let request = new paypal.orders.OrdersCreateRequest();
			request.requestBody({
				intent: "CAPTURE",
				purchase_units: [
					{
						amount: {
							currency_code: "USD",
							value,
						},
					},
				],
			});
			let response = await client.execute(request);
			return res.json({ id: response.result.id });
		}
	} catch (err) {
		console.log(err);
	}
}
