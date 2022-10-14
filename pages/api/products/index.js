import connectDB from "../../../database/connectDB";
import Product from "../../../database/models/Product";

const products = async (req, res) => {
	try {
		await connectDB();
		if (req.method === "POST") {
			const {
				title,
				image,
				description,
				categories,
				size,
				color,
				price,
				inStock,
			} = req.body;

			const newProduct = await Product.create({
				title,
				image,
				description,
				categories,
				size,
				color,
				price,
				inStock,
			});

			res.status(200).json({
				status: "success",
				product: newProduct,
			});
		}
		if (req.method === "GET") {
			const products = await Product.find();

			if (products.length < 1) {
				return res.status(404).json({
					status: "fail",
					message: "Products not found.",
				});
			}
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

export default products;
