import mongoose, { Schema, model, models } from "mongoose";

const productSchema = Schema({
	title: {
		type: String,
		required: [true, "Product title is required."],
		unique: true,
	},

	image: {
		type: String,
		required: [true, "Product image is required."],
	},

	description: {
		type: String,
		required: [true, "Product description is required."],
	},

	categories: [
		{
			type: String,
			required: [true, "You must assign at least one category."],
		},
	],

	size: { type: String },
	color: { type: String, required: [true, "Product color is required."] },
	price: { type: Number, required: [true, "Product price is required."] },

	inStock: {
		type: Boolean,
		default: true,
	},

	comments: [
		{
			type: mongoose.Types.ObjectId,
			ref: "Comment",
		},
	],

	reviews: [
		{
			type: mongoose.Types.ObjectId,
			ref: "Review",
		},
	],
});

const Product = models.Product || model("Product", productSchema);

export default Product;
