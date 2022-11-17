import connectDB from "../../../../database/connectDB";
import Product from "../../../../database/models/Product";

const product = async (req, res) => {
	req.userId;
	try {
		await connectDB();

		if (req.method === "GET") {
			const { slug } = req.query;

			if (!slug) {
				return res.status(400).json({
					status: "fail",
					message: "Bad Request. Slug cannot be undefined.",
				});
			}

			const product = await Product.findOne({ slug }).populate({
				path: "comments",
				populate: {
					path: "user",
				},
			});

			console.log(product);

			if (!product) {
				res.status(404).json({
					status: "fail",
					message: "Product not found.",
				});
			}

			res.status(200).json({
				status: "success",
				product,
			});
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({
			status: "fail;",
			message: err.message,
		});
	}
};

export default product;
