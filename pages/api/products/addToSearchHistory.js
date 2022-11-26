import connectDB from "../../../database/connectDB";
import User from "../../../database/models/User";

const addToSearchHistory = async (req, res) => {
	try {
		await connectDB();
		if (req.method === "PATCH") {
			const { id, productId } = req.body;

			console.log(id, productId);

			if (!id) {
				return res.status(400).json({
					status: "fail",
					message: "User id required.",
				});
			}

			if (!productId) {
				return res.status(400).json({
					status: "fail",
					message: "Bad request. Require productId",
				});
			}

			const user = await User.findById(id).select("searchHistory");

			const isAlreadyInHistory = user.searchHistory.find(
				(result) => result._id.toString() === productId
			);

			if (isAlreadyInHistory) {
				return res.status(400).json({
					status: "fail",
					message: "Product is already added to history.",
				});
			}
			console.log(isAlreadyInHistory);

			await User.findByIdAndUpdate(id, {
				$push: { searchHistory: productId },
			});

			res.status(200).json({
				status: "success",
				message: "Proudct added to search history.",
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

export default addToSearchHistory;
