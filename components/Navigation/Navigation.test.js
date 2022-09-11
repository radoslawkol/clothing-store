import React from "react";
import userEvent from "@testing-library/user-event";
import {
	getByTestId,
	getByTitle,
	render,
	screen,
} from "@testing-library/react";
import Navigation from "./index";
import MenuMobile from "./MenuMobile";
import { text } from "stream/consumers";

describe("Navigation", () => {
	beforeEach(() => {
		render(<Navigation />);
	});

	beforeAll(() => {
		screen.debug();
	});

	test("Renders MenuMobile Component when menu button is clicked", () => {
		const menuButton = screen.getByTestId("menuButton");
		expect(menuButton).toBeInTheDocument();

		userEvent.click(menuButton);

		// const MenuMobileComponent = screen.getByTestId("MenuMobile");
	});
});
