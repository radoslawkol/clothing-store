import { Schema, model, models } from "mongoose";

const orderSchema = Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		products: { type: Array, required: [true, "Products are required."] },

		total: {
			type: Number,
			required: [true, "Total is required."],
		},
		amount: {
			type: Number,
			required: [true, "Amount is required."],
		},
		deliveryCost: {
			type: Number,
			required: [true, "Delivery cost is required."],
		},

		deliveryAddress: {
			firstName: {
				type: String,
				trim: true,
				match: /^[^\u4E00-\u9FBF\u3040-\u309f\u30A0-\u30FF]+$/,
				required: [true, "First name is required."],
			},
			lastName: {
				type: String,
				trim: true,
				match: /^[^\u4E00-\u9FBF\u3040-\u309f\u30A0-\u30FF]+$/,
				required: [true, "Last name is required."],
			},
			email: {
				type: String,
				trim: true,
				match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
				required: [true, "Email is required."],
			},
			phoneNumber: {
				type: String,
				trim: true,
				match: /^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/,
				minLength: 9,
				maxLength: 12,
				required: [true, "Phone number is required."],
			},
			streetAddress: {
				type: String,
				trim: true,
				match: /^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/,
				required: [true, "Address is required."],
			},
			apt: { type: String, trim: true },
			postalCode: {
				type: String,
				match: /^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/,
				maxLength: [30, "Postal Code cannot be longer than 30 characters."],
				trim: true,
				required: [true, "Postal code is required."],
			},
			state: {
				type: String,
				match: /^([^0-9]*)$/,
				trim: true,
				required: [true, "Country is required."],
			},
			city: {
				type: String,
				trim: true,
				match: /^([^0-9]*)$/,
				required: [true, "City is required."],
			},
		},
	},
	{ timestamps: true }
);

const Order = models.Order || model("Order", orderSchema);

export default Order;
