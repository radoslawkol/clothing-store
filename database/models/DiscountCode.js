import mongoose, { Schema, models } from "mongoose";

// 0 - 100  Number means percantage

const discountCodeSchema = Schema({
	code: {
		type: String,
		unique: true,
		required: [true, "Code is required."],
	},
	discount: {
		type: Number,
		max: [100, "Max possible value is 100"],
		min: [1, "Min possible value is 1"],
		required: [true, "Discount is required."],
	},
	isActive: { type: Boolean, default: true },
});

const DiscountCode =
	models.DiscountCode || mongoose.model("DiscountCode", discountCodeSchema);

export default DiscountCode;
