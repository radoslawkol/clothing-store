import mongoose, { Schema, model, models } from "mongoose";

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

	confirmPassword: {
		type: String,
		required: [true, "User has to confirm password."],
	},

	favourites: [
		{
			type: mongoose.ObjectId(),
			ref: "Product",
		},
	],

	searchHistory: [
		{
			type: mongoose.ObjectId(),
			ref: "Product",
		},
	],

	recentlyViewProducts: [
		{
			type: mongoose.ObjectId(),
			ref: "Product",
		},
	],

	reviews: [
		{
			type: mongoose.ObjectId(),
			ref: "Review",
		},
	],

	comments: [
		{
			type: mongoose.ObjectId(),
			ref: "Comment",
		},
	],

	orders: [
		{
			type: mongoose.ObjectId(),
			ref: "Order",
		},
	],
});

const User = models.User || model("User", userSchema);

export default User;
