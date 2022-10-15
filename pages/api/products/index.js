import connectDB from "../../../database/connectDB";
import Product from "../../../database/models/Product";

const findNewProducts = async (category) => {
	try {
		let products;
		if (category) {
			products = await Product.find({
				category,
			});
		} else {
			products = await Product.find();
		}
		return products.sort(
			(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
		);
	} catch (err) {
		console.log(err);
	}
};

const findProductByProductCategoryOrCategory = async (
	gender,
	category,
	productCategory
) => {
	try {
		if (productCategory) {
			return await Product.aggregate([
				{
					$match: {
						$and: [{ gender }, { category }, { productCategory }],
					},
				},
			]);
		} else {
			return await Product.aggregate([
				{
					$match: {
						$and: [{ gender }, { category }],
					},
				},
			]).sort({
				createdAt: -1,
			});
		}
	} catch (err) {
		console.log(err);
	}
};

const findProductsByGenderOrCategory = async (
	gender,
	category,
	productCategory
) => {
	try {
		let products;
		if (category) {
			products = await findProductByProductCategoryOrCategory(
				gender,
				category,
				productCategory
			);
		} else {
			products = await Product.find({
				gender,
			}).sort({
				createdAt: -1,
			});
		}
		return products;
	} catch (err) {
		console.log(err);
	}
};

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
			const { gender, category, productCategory } = req.query;
			console.log(gender, category, productCategory);

			let products;
			if (gender !== "new") {
				products = await findProductsByGenderOrCategory(
					gender,
					category,
					productCategory
				);
			} else {
				products = await findNewProducts(category);
				console.log(products);
			}

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
