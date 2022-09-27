/// <reference types='cypress' />

it("Displays correct heading when navigating to checkout route", () => {
	cy.visit("/");
	cy.get(".bagIcon").click();
	cy.contains(/my bag/i).should("exist");
});
