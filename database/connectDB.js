import mongoose from "mongoose";

const connectDB = async () => {
	try {
		if (mongoose.connection.readyState == 1) {
			return;
		} else {
			const DB_URL = process.env.DB_URI.replace(
				"<password>",
				process.env.DB_PASSWORD
			);
			const db = await mongoose.connect(DB_URL);
			console.log("Database connected successfully.");
		}
	} catch (err) {
		console.log(err);
	}
};

export default connectDB;
