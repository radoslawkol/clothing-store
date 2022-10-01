import mongoose from "mongoose";

export default connectDB = async () => {
	const DB_URL = process.env.DB_URL.replace(
		"<password>",
		process.env.DB_PASSWORD
	);
	mongoose.connect(dbUrl);
};
