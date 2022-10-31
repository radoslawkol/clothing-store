/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	experimental: {
		images: {
			allowFutureImage: true,
		},
	},
	images: {
		domains: ["cdn.pixabay.com", "images.unsplash.com", "res.cloudinary.com"],
	},
};
