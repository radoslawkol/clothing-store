import connectDB from "../../../database/connectDB";
import User from "../../../database/models/User";

const favourites = async (req, res) => {
	try {
		await connectDB();

		if (req.method === "PATCH") {
			const { favouriteProductId, userId } = req.body;

			const user = await User.findById(userId).select("favourites");

			if (!user) {
				res.status(400).json({
					status: "fail",
					message: "You are not logged im.",
				});
			}
			const favProductExists = user?.favourites?.find(
				(fav) => fav._id.toString() === favouriteProductId
			);

			if (!favProductExists) {
				const updatedUser = await User.updateOne(
					{ _id: userId },
					{
						$push: {
							favourites: favouriteProductId,
						},
					}
				);

				res.status(200).json({
					status: "success",
					message: "The product was added to favourites",
				});
			} else {
				await User.updateOne(
					{ _id: userId },
					{
						$pull: {
							favourites: favouriteProductId,
						},
					}
				);

				res.status(200).json({
					status: "fail",
					message: "The product was deleted from favourites.",
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

export default favourites;
