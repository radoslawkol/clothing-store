import connectDB from "../../../database/connectDB";
import Product from "../../../database/models/Product";
import Comment from "../../../database/models/Comment";

const commentsHandler = async (req, res) => {
	try {
		await connectDB();

		if (req.method === "POST") {
			const { productId, userId, rating, comment } = req.body;

			if (!productId) {
				return res.status(400).json({
					status: "fail",
					message: "Product id is required.",
				});
			}

			const newComment = await Comment.create({
				user: userId,
				rating,
				comment,
			});

			const updatedProduct = await Product.findByIdAndUpdate(productId, {
				$push: {
					comments: newComment._id,
				},
			});

			res.status(200).json({
				status: "success",
				newComment,
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

export default commentsHandler;
