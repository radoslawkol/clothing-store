import * as yup from "yup";

export default yup.object({
	firstName: yup
		.string()
		.required("First name is required.")
		.matches(
			/^[^\u4E00-\u9FBF\u3040-\u309f\u30A0-\u30FF]+$/,
			"First name can only contain alphabets."
		),
	lastName: yup
		.string()
		.required("Last name is required.")
		.matches(
			/^[^\u4E00-\u9FBF\u3040-\u309f\u30A0-\u30FF]+$/,
			"First name can only contain alphabets."
		),
	email: yup
		.string()
		.email("Email must be valid.")
		.lowercase()
		.trim()
		.required("Email is required."),
	phoneNumber: yup
		.string()
		.matches(/^[0-9]*$/, "Only numbers acceptable.")
		.length(9, "Phone number should have 9 numbers.")
		.trim()
		.required("Phone Number is required."),
	streetAddress: yup
		.string()
		.matches(
			/^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/,
			"Street address should have street and address."
		)
		.trim()
		.required("Street address is required."),
	postalCode: yup
		.string()
		.matches(
			/^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/,
			"Postal code should contain numbers and letters."
		)
		.max(30, "Postal code cannot have more than 30 characters.")
		.trim()
		.required("Postal code is required."),
	apt: yup.string(),
	city: yup
		.string()
		.matches(/^([^0-9]*)$/, "City name should contain only letters.")
		.trim()
		.required("City is required."),
	state: yup.string().trim().required("State is required."),
});
