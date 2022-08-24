/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto", "sans-serif"],
			},
			colors: {
				"primary-key": "#4E342E",
				"on-primary-key": "#ffffff",
				primary: "#EDEDED",
				"on-primary": "#5D4037",
				"secondary-key": "#00000",
				"on-secondary-key": "#ffffff",
				secondary: "#E0E0E0",
				"on-secondary": "#757575",
				"error-primary-key": "#D50000",
				"on-error-primary-key": "#ffffff",
				"error-primary": "#FFCDD2",
				"error-on-primary": "#4E342E",
				"success-primary-key": "#2AE748",
				"success-on-primary-key": "#ffffff",
				"success-primary": "#B8F8C2",
				"success-on-primary": "#067017",
				"info-primary-key": "#4584E4",
				"info-on-primary-key": "#ffffff",
				"info-primary": "#9AC0FB",
				"info-on-primary": "#1867DD",
				"light-grey-hover": "#F4F3F3",
			},
		},
	},
	plugins: [],
	important: true,
};
