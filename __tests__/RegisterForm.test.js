import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterForm from "../components/Login/RegisterForm";

describe("RegisterForm", () => {
	beforeEach(() => {
		render(<RegisterForm />);
	});

	test("Displays error when First Name is not inputed when form is submitted", async () => {
		fireEvent.submit(screen.getByTestId("registerForm"));
		expect(
			await screen.findByText(/First name is required/i)
		).toBeInTheDocument();
	});
	test("Displays error when Last Name is not inputed when form is submitted", async () => {
		fireEvent.submit(screen.getByTestId("registerForm"));
		expect(
			await screen.findByText(/Last name is required/i)
		).toBeInTheDocument();
	});
	test("Displays error when email is not inputed when form is submitted", async () => {
		fireEvent.submit(screen.getByTestId("registerForm"));
		expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
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

	test("Displays error when password is not inputed when form is submitted", async () => {
		fireEvent.submit(screen.getByTestId("registerForm"));
		expect(await screen.findByText("Password is required")).toBeInTheDocument();
	});

	test("Displays error when confirm password is not inputed when form is submitted", async () => {
		fireEvent.submit(screen.getByTestId("registerForm"));
		expect(
			await screen.findByText(/Confirm password is required/i)
		).toBeInTheDocument();
	});

	test("Displays error if password is shorter than 6 charachters", async () => {
		const passwordInput = screen.getByPlaceholderText("Password");
		await userEvent.type(passwordInput, "12345");

		expect(
			screen.getByText(/Password has to be longer than 6 characters/i)
		).toBeInTheDocument();
	});

	test("Displays error when confirm password is not matching", async () => {
		const passwordInput = screen.getByPlaceholderText("Password");
		await userEvent.type(passwordInput, "123456");

		await userEvent.type(
			screen.getByPlaceholderText("Confirm Password"),
			"123457"
		);

		expect(
			await screen.findByText(/Passwords must match/i)
		).toBeInTheDocument();
	});
});
