import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Newsletter from "./index";

describe("Newsletter", () => {
	beforeEach(() => {
		render(<Newsletter />);
	});

	test("Should display text in input when user writting", async () => {
		const inputElement = screen.getByRole("textbox");

		expect(inputElement).toBeInTheDocument();

		await userEvent.type(screen.getByRole("textbox"), "example@gmail.com");
		expect(screen.getByRole("textbox").value).toBe("example@gmail.com");
	});

	test("Should check checkbox if user clicked", async () => {
		const checkboxElement = screen.getByRole("checkbox");
		expect(checkboxElement).toBeInTheDocument();

		await userEvent.click(checkboxElement);

		expect(checkboxElement.checked).toBe(true);
	});
});
