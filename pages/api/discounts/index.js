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
		if (req.method === "GET" && req.query.code) {
			const { code } = req.query;

			const isCode = await DiscountCode.findOne({ code });

			if (isCode) {
				res.status("200").json({
					status: "success",
					discount: isCode.discount,
				});
			} else {
				res.status(400).json({
					status: "fail",
					message: "Code does not exists or has expired.",
				});
			}
		}
		if (req.method === "GET" && req.query.code !== "") {
			const code = await DiscountCode.findOne({}, {}, { sort: "asc" });

			if (code) {
				return res.status(200).json({
					status: "success",
					code,
				});
			} else {
				res.status(404).json({
					status: "fail",
					message: "Code not found.",
				});
			}
		} else {
			res
				.status(400)
				.json({ status: "fail", message: "Code query cannot be empty" });
		}
		if (req.method === "PATCH") {
			const { id } = req.body;

			if (id) {
				return res.status(400).json({
					status: "fail",
					message: "Bad request.",
				});
			}

			await DiscountCode.findByIdAndUpdate(id, { isActive: false });

			res.status(200).json({
				status: "success",
				message: "Discount code was successfully disactivated.",
			});
		}

		if (req.method === "DELETE") {
			const { id } = req.body;

			if (id) {
				return res.status(400).json({
					status: "fail",
					message: "Bad request.",
				});
			}

			await DiscountCode.findByIdAndDelete(id);

			res.status(200).json({
				status: "success",
				message: "Discount code was successfully deleted.",
			});
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
