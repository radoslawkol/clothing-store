import jwt, { decode } from "jsonwebtoken";
import connectDB from "../../../../database/connectDB";
import User from "../../../../database/models/User";

const userId = async (req, res) => {
	try {
		await connectDB();
		if (req.method === "GET") {
			req.query;
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

			res.status(200).json({
				status: "success",
				user,
			});
		}
		if (req.method === "PATCH") {
			const { firstName, lastName, email, birthDay, birthYear, birthMonth } =
				req.body;

			const token = req.headers.authorization.split(" ")[1];

			const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

			if (!decoded.id) {
				return res.status(401).json({
					status: "fail",
					message: "You are not authorised.",
				});
			}

			if (
				!firstName ||
				!lastName ||
				!email ||
				!birthDay ||
				!birthYear ||
				!birthMonth
			) {
				return res
					.status(400)
					.json({ status: "fail", message: "Bad request." });
			}

			const updatedUser = await User.findByIdAndUpdate(
				decoded.id,
				{
					firstName,
					lastName,
					email,
					birthDay,
					birthYear,
					birthMonth,
				},
				{ new: true }
			).select("-password");

			res.status(200).json({
				status: "success",
				updatedUser,
				token,
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
