import mongoose, { Schema, model, models } from "mongoose";
import slugify from "slugify";

const productSchema = Schema(
	{
		title: {
			type: String,
			required: [true, "Product title is required."],
			unique: true,
		},

		slug: {
			type: String,
			required: [true, "URL slug is required."],
			unique: true,
		},

		image: {
			type: Array,
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

		productCategory: {
			type: String,
			required: [true, "Product category is required."],
		},
		category: {
			type: String,
			required: [true, "Category is required."],
		},
		gender: {
			type: String,
			enum: ["woman", "man"],
			required: [true, "Gender is required."],
		},

		sizes: { type: Array, required: [true, "Sizes are required."] },
		colors: {
			type: Array,
			required: [true, "Product avaliable colors are required."],
		},
		color: {
			type: String,
			required: [true, "Product color is required."],
		},

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
	},
	{ timestamps: true }
);

productSchema.pre("validate", function (next) {
	if (!this.slug) {
		this.slug = slugify(this.title, {
			lower: true,
		});
	}
	next();
});

const Product = models.Product || model("Product", productSchema);

export default Product;
