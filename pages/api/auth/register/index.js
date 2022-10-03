import User from "../../../../database/models/User";
import jwt from "jsonwebtoken";
import connectDB from "../../../../database/connectDB";
import bcrypt from "bcrypt";

const register = async (req, res) => {
	await connectDB();
	try {
		if (req.method === "POST") {
			const {
				firstName,
				lastName,
				email,
				birthYear,
				birthMonth,
				birthDay,
				password,
				confirmPassword,
			} = req.body;

			const currDate = new Date();
			const birthDate = new Date(birthYear, birthMonth, birthDay);
			const allowedAge = new Date(568025136000); // 18 years old
			const age = currDate - birthDate;

			const isEmailAlreadyExists = await User.findOne({ email });

			if (isEmailAlreadyExists) {
				return res.status(400).json({
					status: "fail",
					message: "Such email does already exists. Try with a diffrent one.",
				});
			}
			if (age < allowedAge) {
				return res.status(400).json({
					status: "fail",
					message: "You are too young to create an account.",
				});
			}

			const hashedPassword = await bcrypt.hash(password, 12);

			const newUser = await User.create({
				firstName,
				lastName,
				email,
				birthYear,
				birthMonth,
				birthDay,
				password: hashedPassword,
			});

			newUser.password = undefined;
			console.log(newUser);

			const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY);

			res.status(200).json({
				status: "sucess",
				user: newUser,
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

export default register;
