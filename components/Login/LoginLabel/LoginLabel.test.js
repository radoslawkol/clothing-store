import React from "react";
import LoginLabel from "./index";
import { render, screen } from "@testing-library/react";

describe("LoginLabel", () => {
	beforeEach(() => {
		render(<LoginLabel />);
	});
});
