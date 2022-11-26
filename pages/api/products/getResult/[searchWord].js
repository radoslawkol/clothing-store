import connectDB from "../../../../database/connectDB";
import Product from "../../../../database/models/Product";

const searchWord = async (req, res) => {
	try {
		await connectDB();
		if (req.method === "GET") {
			const { searchWord } = req.query;

			if (!searchWord) {
				return res.status(400).json({
					status: "fail",
					message: "Bad request. Search word is required.",
				});
			}

			const products = await Product.find({
				title: { $regex: searchWord, $options: "i" },
			}).select("title category slug productCategory gender image color");

			res.status(200).json({
				status: "success",
				products,
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

export default searchWord;
