import { Schema, model, models } from "mongoose";
import Product from "./Product";

const userSchema = Schema({
	firstName: {
		type: String,
		required: [true, "User has to have a firtst name."],
	},
	lastName: {
		type: String,
		required: [true, "User has to have a last name."],
	},

	email: {
		type: String,
		required: [true, "User has to have an email."],
		unique: true,
	},

	birthYear: {
		type: Number,
		required: [true, "Birth year is required."],
	},

	birthMonth: {
		type: Number,
		required: [true, "Birth month is required."],
	},

	birthDay: {
		type: Number,
		required: [true, "Birth day is required."],
	},

	password: {
		type: String,
		required: [true, "User has to put a password."],
	},

	favourites: [
		{
			type: Schema.Types.ObjectId,
			ref: "Product",
		},
	],

	searchHistory: [
		{
			type: Schema.Types.ObjectId,
			ref: "Product",
		},
	],

	recentlyViewProducts: [
		{
			type: Schema.Types.ObjectId,
			ref: "Product",
		},
	],

	reviews: [
		{
			type: Schema.Types.ObjectId,
			ref: "Review",
		},
	],

	comments: [
		{
			type: Schema.Types.ObjectId,
			ref: "Comment",
		},
	],

	orders: [
		{
			type: Schema.Types.ObjectId,
			ref: "Order",
		},
	],
});

const User = models.User || model("User", userSchema);

export default User;
