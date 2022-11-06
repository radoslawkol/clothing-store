import { Schema, model, models, ObjectId } from "mongoose";

const orderSchema = Schema(
	{
		userId: {
			type: ObjectId(),
			ref: "User",
			required: true,
		},
		products: [
			{
				productId: {
					type: ObjectId(),
					ref: "Product",
					required: true,
				},
				quantity: {
					type: Number,
					default: 1,
				},
			},
		],

		amount: {
			type: Number,
			required: true,
		},

		deliveryAddress: {
			country: { type: String, required: [true, "Country is required."] },
			city: { type: String, required: [true, "City is required."] },
			region: { type: String, required: [true, "Region is required."] },
			streetAddress: { type: String, required: [true, "Address is required."] },
			apartment: { type: String },
			postalCode: {
				type: Number,
				required: [true, "Postal code is required."],
			},
			phoneNumber: {
				type: Number,
				required: [true, "Phone number is required."],
			},
		},
	},
	{ timestamps: true }
);

const Order = models.Order || model("Order", orderSchema);

export default Order;
