import connectDB from "../../../../database/connectDB";
import User from "../../../../database/models/User";

const userId = async (req, res) => {
	try {
		await connectDB();
		if (req.method === "GET") {
			console.log(req.query);
			const { id } = req.query;

			const user = await User.findById(id)
				.populate("favourites")
				.select("-password");

			if (!user) {
				return res.status(404).json({
					status: "fail",
					message: "User not found.",
				});
			}

			console.log(user);

			res.status(200).json({
				status: "success",
				user,
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

export default userId;
