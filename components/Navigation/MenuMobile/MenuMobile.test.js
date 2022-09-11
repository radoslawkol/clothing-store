import React from "react";
import { render, screen } from "@testing-library/react";
import MenuMobile from "./index";

describe("MenuMobile", () => {
	test("Should render MenuMobile", () => {
		render(<MenuMobile categories={["new", "man", "woman"]} />);
		screen.debug();
	});
});
