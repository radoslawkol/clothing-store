// https//<your-site.com>/api/revalidate?secret=<token>

export default async function handler(req, res) {
	if (req.method !== "POST") {
		res.status(400).json({
			status: "fail",
			message: "Invalid HTTP method. Only POST requests are allowed.",
		});
	}

	if (req.query.secret !== process.env.REVALIDATION_TOKEN) {
		return res.status(401).json({ message: "Invalid revalidation token" });
	}

	if (!req.body) {
		res.status(400).json({
			staus: "fail",
			message: "Bad request. (No body).",
		});
	}

	const { slugToRevalidate } = req.body;

	try {
		if (slugToRevalidate) {
			await res.revalidate(`/${slugToRevalidate}`);
			return res.json({ revalidated: true });
		}
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			status: "fail",
			message: "Error revalidating",
		});
	}
}
