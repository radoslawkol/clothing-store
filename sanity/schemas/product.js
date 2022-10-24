export default {
	name: "product",
	type: "document",
	title: "Product",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Title",
		},
		{
			name: "image",
			type: "array",
			title: "Photos",
			of: [{ type: "image" }],
		},
		{
			name: "description",
			type: "text",
			title: "Description",
		},
		// {
		// 	name: "categories",
		// 	type: "",
		// 	title: "Categories",
		// },
		{
			name: "gender",
			type: "string",
			title: "gender",
		},
		{
			name: "color",
			type: "string",
			title: "Color",
		},
		{
			name: "price",
			type: "number",
			title: "Price",
		},
	],
};
