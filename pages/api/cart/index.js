import Cart from "../../../database/models/Cart";
import connectDB from "../../../../database/connectDB";

export const cart = async (req, res) => {
	try {
		await connectDB;

		if (req.method === "POST") {
			const { userId, products } = req.body;
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({
			status: "fail",
			message: err.message,
		});
	}
};
