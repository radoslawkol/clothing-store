const login = (req, res) => {
	if (req.method === "POST") {
		const { email, password } = req.body;

		console.log(email, password);

		res.status(200).json({
			status: "success",
			token,
		});
	}
};

export default login;
