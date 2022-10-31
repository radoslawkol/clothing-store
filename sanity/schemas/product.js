{
	/* <reference types='@sanity/types/parts' />; */
}

export default {
	name: "product",
	type: "document",
	title: "Product",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Title",
			validation: (Rule) => Rule.required().error("Title is required."),
		},
		{
			name: "gender",
			type: "string",
			title: "Sex",
			validation: (Rule) => Rule.required().error("Sex is required."),
			options: {
				list: [
					{ title: "man", value: "man" },
					{ title: "woman", value: "woman" },
				],
			},
		},
		{
			name: "category",
			type: "string",
			title: "Category",
			validation: (Rule) => Rule.required().error("Category is required."),
			options: {
				list: [
					{ title: "clothing", value: "clothing" },
					{ title: "accessories", value: "accessories" },
				],
			},
		},
		{
			name: "productCategory",
			type: "string",
			title: "Product category",
			description: "PLURAL FORM! - e.g dresses, jeans.",
			validation: (Rule) =>
				Rule.required().error("Product category is required."),
		},
		{
			name: "price",
			type: "number",
			title: "Price",
			validation: (Rule) => Rule.required().error("Price is required."),
		},
		{
			name: "inStock",
			type: "boolean",
			title: "In Stock",
			validation: (Rule) => Rule.required().error("Stock status is required."),
		},
		{
			name: "categories",
			type: "array",
			title: "Categories",
			validation: (Rule) => Rule.required().error("Categories are required."),
			of: [{ type: "string" }],
		},
		{
			name: "colors",
			type: "array",
			title: "Avaliable colors",
			validation: (Rule) =>
				Rule.required().error("Avaliable colors are required."),
			of: [
				{ type: "color" },

				{
					name: "colorName",
					type: "object",
					title: "Color name",
					fields: [{ title: "Color name", type: "string", name: "colorName" }],
				},
			],
		},
		{
			name: "sizes",
			type: "array",
			title: "Avaliable sizes",
			description: "e.g S, M, L, Xl",
			of: [{ type: "string" }],
			validation: (Rule) =>
				Rule.required().error("Avaliables sizes are required."),
		},
		{
			name: "image",
			type: "array",
			title: "Photos",
			of: [{ type: "image" }],
			validation: (Rule) => Rule.required().error("Image is required."),
		},

		{
			name: "description",
			type: "text",
			title: "Description",
			validation: (Rule) => Rule.required().error("Description is required."),
		},
	],
};
