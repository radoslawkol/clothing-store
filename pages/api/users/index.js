const users = async (req, res) => {
	try {
		if (req.method === "GET") {
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({
			status: "fail",
			message: err.message,
		});
	}
};
