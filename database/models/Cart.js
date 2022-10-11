import { Schema, model, models, ObjectId } from "mongoose";

const cartSchema = Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			required: true,
		},
		products: [
			{
				type: Schema.Types.ObjectId,
				ref: "Product",
				quantity: {
					type: Number,
					default: 1,
				},
			},
		],
	},
	{
		timestamps: true,
	}
);

const Cart = models.Cart || model("Cart", cartSchema);

export default Cart;
