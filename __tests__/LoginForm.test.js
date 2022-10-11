import { fireEvent, getByRole, screen } from "@testing-library/react";
import LoginForm from "../components/Login/LoginForm";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../utils-test/renderWithProviders";

describe("LoginForm", () => {
	beforeEach(() => {
		renderWithProviders(<LoginForm />);
	});

	test("Displays error when email is not inputed when form is submitted", async () => {
		fireEvent.submit(screen.getByTestId("loginForm"));
		expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
	});

	test("Displays error when password is not inputed when form is submitted", async () => {
		fireEvent.submit(screen.getByTestId("loginForm"));
		expect(
			await screen.findByText(/Password is required/i)
		).toBeInTheDocument();
	});

	test("Displays error when email is invalid", async () => {
		await userEvent.type(screen.getByPlaceholderText("Email"), "fakeuser@com");
		expect(screen.getByText(/Email must be valid/i)).toBeInTheDocument();
	});

	test("Should error be invisible when email is corrected", async () => {
		const emailInput = screen.getByPlaceholderText("Email");

		await userEvent.type(emailInput, "fakeuser@com");
		expect(screen.getByText(/Email must be valid/i)).toBeInTheDocument();

		await userEvent.clear(emailInput);
		await userEvent.type(emailInput, "fakeuser@gmail.com");
		expect(emailInput.value).toBe("fakeuser@gmail.com");
		expect(screen.queryByText(/Email must be valid/i)).not.toBeInTheDocument();
	});
});
