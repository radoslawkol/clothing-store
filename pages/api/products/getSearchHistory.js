import connectDB from "../../../database/connectDB";
import User from "../../../database/models/User";

const getSearchHistory = async (req, res) => {
	try {
		await connectDB();
		if (req.method === "GET") {
			const { id } = req.query;

			console.log(id);

			if (!id) {
				return res.status(400).json({
					status: "fail",
					message: "User id required.",
				});
			}

			const products = await User.findById(id)
				.select("searchHistory")
				.populate({
					path: "searchHistory",
					select: "title slug gender category productCategory color",
				})
				.sort({ createdAt: 1 });

			res.status(200).json({
				status: "success",
				searchHistory: products.searchHistory,
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

export default getSearchHistory;
