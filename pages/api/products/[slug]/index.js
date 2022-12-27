import connectDB from "../../../../database/connectDB";
import Product from "../../../../database/models/Product";
import Comment from "../../../../database/models/Comment";

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

			const product = await Product.findOne({ slug });

			if (!product) {
				return res.status(404).json({
					status: "fail",
					message: "Product was not found.",
				});
			}

			await product.populate({
				path: "comments",
				populate: {
					path: "user",
					select: "firstName lastName",
				},
			});
			let avgRating = 0;
			let result = 0;

			if (product.comments.length > 0) {
				product.comments.forEach((comment) => {
					comment;
					result += comment.rating;
				});
				avgRating = result / product.comments.length;
			}

			res.status(200).json({
				status: "success",
				product: {
					...product.toObject(),
					avgRating,
				},
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
