import { getByPlaceholderText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./index";

describe("SearchBar", () => {
	beforeEach(() => {
		render(<SearchBar />);
	});
	it("Should write text in input", async () => {
		await userEvent.type(screen.getByPlaceholderText("Search..."), "t-shirt");

		expect(screen.getByPlaceholderText("Search...").value).toBe("t-shirt");
	});
});
