<reference types='@sanity/types/parts' />;

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
			name: "gender",
			type: "string",
			title: "Sex",
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
		},
		{
			name: "price",
			type: "number",
			title: "Price",
		},
		{
			name: "inStock",
			type: "boolean",
			title: "In Stock",
		},
		{
			name: "categories",
			type: "array",
			title: "Categories",
			of: [{ type: "string" }],
		},
		{
			name: "colors",
			type: "array",
			title: "Avaliable colors",
			of: [{ type: "color" }],
		},
		{
			name: "sizes",
			type: "array",
			title: "Avaliable sizes",
			description: "e.g S, M, L, Xl",
			of: [{ type: "string" }],
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
	],
};
