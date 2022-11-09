import paypal from "@paypal/checkout-server-sdk";

let clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
let clientSecret = process.env.NEXT_PUBLIC_PAYPAL_SECRET;

let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
let client = new paypal.core.PayPalHttpClient(environment);

export default async function handler(req, res) {
	if (req.method === "POST") {
		const { value } = req.body;
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
}
