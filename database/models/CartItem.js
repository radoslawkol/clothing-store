import { Schema, model, models } from "mongoose";
import Product from "./Product";

const cartItemSchema = Schema(
	{
		productId: { type: Schema.Types.ObjectId, ref: "Product" },
		quantity: { type: Number, required: [true, "Quantity is required."] },
	},
	{
		timestamps: true,
	}
);

const CartItem = models.CartItem || model("CartItem", cartItemSchema);

export default CartItem;
