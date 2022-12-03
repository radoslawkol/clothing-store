import { Schema, model, models } from "mongoose";
import User from "../models/User";
import Product from "./Product";
import CartItem from "./cartItem";

const cartSchema = Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		cartItems: [
			{
				product: { type: Schema.Types.ObjectId, ref: "Product" },
				quantity: { type: Number, required: "Quantity is required." },
			},
		],

		deliveryCost: { type: Number, default: 6 },
		discount: { type: Number, default: 0 },
		totalCost: { type: Number, default: 0 },
	},
	{
		timestamps: true,
	}
);

const Cart = models.Cart || model("Cart", cartSchema);

export default Cart;
