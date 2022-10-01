import { Schema, model, models, ObjectId } from "mongoose";

const cartSchema = Schema(
	{
		userId: { type: ObjectId(), required: true },
		products: [
			{
				productId: {
					type: ObjectId(),
					ref: "Product",
				},
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
