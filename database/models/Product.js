import mongoose, { Schema, model, models, mongo, Mongoose } from "mongoose";
import slugify from "slugify";

const productSchema = Schema(
	{
		title: {
			type: String,
			required: [true, "Product title is required."],
		},

		slug: {
			type: String,
			required: [true, "URL slug is required."],
			unique: true,
		},
		sku: {
			type: String,
			unique: "true",
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
		colors: [
			{
				colorName: {
					type: String,
					required: [true, "ColorName is required."],
				},
				hex: {
					type: "String",
					required: [true, "Color HEX is required."],
				},
				sku: {
					type: String,
					required: [true, "SKU is required"],
				},
			},
		],
		color: {
			type: String,
			required: [true, "Product color is required."],
		},

		price: { type: Number, required: [true, "Product price is required."] },

		inStock: {
			type: Boolean,
			default: true,
		},
		isFavourite: { type: Boolean, default: false },

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
	let identifier = "";
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (let i = 0; i < 8; i++) {
		identifier += characters.charAt(
			Math.floor(Math.random() * [...characters].length)
		);
	}
	const sku = `${identifier}-${this.color.charAt(0)}`;

	if (!this.sku) {
		this.sku = sku;
	}

	if (!this.slug) {
		const slug = slugify(this.title, {
			lower: true,
		});
		console.log(slug, this.color);
		this.slug = `${slug}-${sku}`;
	}
	next();
});

const Product = models.Product || model("Product", productSchema);

export default Product;
