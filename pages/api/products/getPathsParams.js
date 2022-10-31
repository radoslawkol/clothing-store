import connectDB from "../../../database/connectDB";
import Product from "../../../database/models/Product";

const getPathsParams = async (req, res) => {
	try {
		if (req.method === "GET") {
			const categories = await Product.aggregate([
				{
					$group: {
						_id: {
							gender: "$gender",
							category: "$category",
							productCategory: "$productCategory",
							slug: "$slug",
						},
					},
				},
			]);

			console.log(categories);
			res.status(200).json({
				status: "success",
				productCategories: categories,
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

export default getPathsParams;
