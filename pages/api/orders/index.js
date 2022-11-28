import connectDB from "../../../database/connectDB";
import Order from "../../../database/models/Order";
import mongoose from "mongoose";

const orders = async (req, res) => {
	try {
		await connectDB();

		if (req.method === "POST") {
			console.log(req.body);
			const {
				userId,
				products,
				total,
				deliveryCost,
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
				total,
				deliveryCost,
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
			const { userId } = req.query;

			const orders = await Order.find({ userId });
			const ordersInfo = await Order.aggregate([
				{ $match: { userId: mongoose.Types.ObjectId(userId) } },

				{
					$group: {
						_id: "_id",
						total: { $sum: "$total" },
						totalShippingCost: { $sum: "$deliveryCost" },
						ordersAmount: { $sum: 1 },
					},
				},
			]);

			if (orders.length < 1) {
				return res.status(404).json({
					status: "fail",
					message: "Orders not found.",
				});
			}

			res.status(200).json({
				status: "success",
				orders,
				ordersInfo: ordersInfo[0],
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
