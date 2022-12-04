import Cart from "../../../database/models/Cart";
import connectDB from "../../../database/connectDB";
import jwt from "jsonwebtoken";
import Product from "../../../database/models/Product";
import DiscountCode from "../../../database/models/DiscountCode";

export const countTotals = (cart) => {
	let amount = 0;
	let totalPrice = 0;
	let totalCost = 0;

	cart.cartItems.forEach((item) => {
		amount += item.quantity;
		totalPrice += item.quantity * item.product.price;
	});

	const discount = cart.discount * totalPrice;
	totalCost = +(totalPrice - discount + cart.deliveryCost).toFixed(2);

	return {
		amount,
		totalPrice,
		totalCost,
	};
};

const cart = async (req, res) => {
	try {
		await connectDB();

		if (req.method === "POST") {
			const { cartItems, discountCode } = req.body;
			const { authorization } = req.headers;

			if (!authorization) {
				return res.status(403).json({
					status: "fail",
					message: "You are not authorized to perform this action.",
				});
			}

			const token = authorization.split(" ")[1];
			const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY);

			if (!cartItems) {
				return res.status(400).json({
					status: "fail",
					message: "CartItems are required.",
				});
			}
			let discount = 0;
			if (discountCode) {
				const code = await DiscountCode.findOne({ code: discountCode });
				discount = code.discount / 100;
			}

			const cartHasAlreadyExists = await Cart.findOne({ user: id });
			if (cartHasAlreadyExists) {
				const cart = await Cart.findOneAndUpdate(
					{ user: id },
					{ cartItems, discount: discount },
					{ new: true }
				);

				return res.status(200).json({
					status: "success",
					cart,
				});
			}

			const newCart = await Cart.create({
				user: id,
				cartItems,
				discount: discount,
			});

			res.status(200).json({
				status: "success",
				cart: newCart,
			});
		}
		if (req.method === "GET") {
			const { authorization } = req.headers;

			console.log(authorization);
			const token = authorization.split(" ")[1];

			if (!token) {
				return res.status(403).json({
					status: "fail",
					message: "You are not authorized to perform this action.",
				});
			}

			const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY);

			const cart = await Cart.findOne({ user: id }).populate({
				path: "cartItems.product",
				select: "_id title price size color image inStock sku",
			});

			const totals = await countTotals(cart);
			console.log(totals);

			res.status(200).json({
				status: "success",
				cart: { ...cart.toObject(), ...totals },
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
export default cart;
