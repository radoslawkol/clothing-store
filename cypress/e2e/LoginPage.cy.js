/// <reference types="cypress"/>

describe("LoginPage", () => {
	beforeEach(() => {
		cy.visit("/login");
	});

	it("Displays login modal", () => {
		cy.contains("Sign in").should("be.visible");
	});

	it("Display sign up form when button is clicked", () => {
		cy.contains("Sign up").click();
		cy.get(".registerForm").should("be.visible");
	});
	it("Display sign in form when button is clicked", () => {
		cy.contains("Sign in").click();
		cy.get(".loginForm").should("be.visible");
	});
});
