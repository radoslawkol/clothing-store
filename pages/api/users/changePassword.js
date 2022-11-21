import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../../database/models/User";

const changePassword = async (req, res) => {
	try {
		if (req.method === "PATCH") {
			const { currentPassword, newPassword } = req.body;

			const token = req.headers.authorization.split(" ")[1];

			const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

			if (!decoded.id) {
				return res.status(401).json({
					status: "fail",
					message: "You are not authorised.",
				});
			}

			if (!currentPassword || !newPassword) {
				return res
					.status(400)
					.json({ status: "fail", message: "Bad request." });
			}

			const user = await User.findById(decoded.id);

			if (!user) {
				return res.status(400).json({
					status: "fail",
					message: "User does not exist.",
				});
			}

			const isPasswordCorrect = await bcrypt.compare(
				currentPassword,
				user.password
			);

			if (!isPasswordCorrect) {
				return res.status(401).json({
					status: "fail",
					message: "Password is incorect",
				});
			}

			const hashedPassword = await bcrypt.hash(newPassword, 12);

			await User.findByIdAndUpdate(decoded.id, {
				password: hashedPassword,
			});

			res.status(200).json({
				status: "success",
				message: "Password changed successfully.",
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

export default changePassword;
