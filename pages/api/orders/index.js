import connectDB from "../../../database/connectDB";
import Order from "../../../database/models/Order";

const orders = async (req, res) => {
	try {
		await connectDB();

		if (req.method === "POST") {
			const {
				userId,
				products,
				amount,
				firstName,
				lastName,
				email,
				phoneNumber,
				streetAddress,
				apt,
				postalCode,
				state,
				city,
			} = req.body;

			const order = await Order.create({
				userId,
				products,
				amount,
				deliveryAddress: {
					firstName,
					lastName,
					email,
					phoneNumber,
					streetAddress,
					apt,
					postalCode,
					state,
					city,
				},
			});

			res.status(200).json({
				status: "success",
				order,
			});
		}
		if (req.method === "GET") {
			const { orderId } = req.query;

			const order = await Order.findById(orderId);

			if (!order) {
				res.status(404).json({
					status: "fail",
					message: "Order with that ID does not exist.",
				});
			}

			res.status(200).json({
				status: "success",
				order,
			});
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({
			status: "fail",
			message: err.message,
		});
	}
};

export default orders;
