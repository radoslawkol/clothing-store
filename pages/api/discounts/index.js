import connectDB from "../../../database/connectDB";
import DiscountCode from "../../../database/models/DiscountCode";

const discounts = async (req, res) => {
	try {
		await connectDB();
		if (req.method === "POST") {
			const { code, discount } = req.body;

			if (!code || !discount) {
				return res.status(400).json({
					status: "fail",
					message: "Discount code and discount amount is required.",
				});
			}

			await DiscountCode.create({ code, discount });

			res.status(200).json({
				status: "success",
				message: "Discount code has been successfully added.",
			});
		}
		if (req.method === "GET") {
			const { code } = req.query;

			const isCode = await DiscountCode.findOne({ code });

			if (isCode) {
				res.status("200").json({
					status: "success",
					message: "Code exists.",
				});
			} else {
				res.status(400).json({
					status: "fail",
					message: "Code does not exists or has expired.",
				});
			}
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({
			status: "fail",
			message: err.message,
		});
	}
};

export default discounts;
