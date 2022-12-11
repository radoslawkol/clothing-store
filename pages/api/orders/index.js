import connectDB from "../../../database/connectDB";
import Order from "../../../database/models/Order";
import mongoose from "mongoose";
import Cart from "../../../database/models/Cart";
import { countTotals } from "../cart";
const orders = async (req, res) => {
	try {
		await connectDB();

		if (req.method === "POST") {
			req.body;
			const {
				userId,
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

			const cart = await Cart.findOne({ user: userId }).populate({
				path: "cartItems.product",
				select: "_id title image color price inStock sku",
			});
			const totals = await countTotals(cart);

			const order = await Order.create({
				userId,
				products: cart.cartItems,
				total: totals.totalCost,
				deliveryCost: cart.deliveryCost,
				amount: totals.amount,
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

			await Cart.deleteOne({ user: userId });

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
