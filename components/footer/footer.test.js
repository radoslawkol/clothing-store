import React from "react";
import Footer from "./index";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
	test("Should render Footer", () => {
		render(<Footer />);
		screen.debug();
	});
});
