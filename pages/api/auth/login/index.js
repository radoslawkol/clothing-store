export default login = (req, res) => {
	if (req.method === "POST") {
		res.status(200).json({
			status: "success",
			token,
		});
	}
};
