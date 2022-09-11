/// <reference types='cypress' />

describe("Navigation", () => {
	beforeEach(() => {
		cy.visit("/");
	});
	it("Should open Search Modal Component on button click", () => {
		cy.get("button#searchModalBtn").click();
		cy.get("input[type='text']").should("be.visible");
	});
	it("Should close Search Modal Component on close button click", () => {
		cy.get("button#searchModalBtn").click();
		cy.get("input[type='text']").should("be.visible");
		cy.get(".closeIcon").click();
		cy.get("input[type='text']").should("not.exist");
	});
});
