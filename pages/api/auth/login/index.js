import User from "../../../../database/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectDB from "../../../../database/connectDB";

const login = async (req, res) => {
	try {
		await connectDB();

		if (req.method === "POST") {
			const { email, password } = req.body;

			const user = await User.findOne({ email });

			if (!user) {
				return res.status(404).json({
					status: "fail",
					message: "User with this email does not exist.",
				});
			}

			const isPasswordCorrect = await bcrypt.compare(password, user.password);

			if (!isPasswordCorrect) {
				return res.status(401).json({
					status: "fail",
					message: "Your credentials are incorrect.",
				});
			}

			const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);

			const { email: userEmail, firstName, lastName, _id, favourites } = user;

			res.status(200).json({
				status: "success",
				data: {
					token,
					_id,
					email: userEmail,
					firstName,
					lastName,
					favourites,
				},
			});
		}
	} catch (err) {
		console.log(err);
	}
};

export default login;
