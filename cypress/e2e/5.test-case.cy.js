/// <reference types = "cypress" />

describe('Register User with existing email', () => {
  before(() => {
    // Register a user before running the test as prerequisite:
    cy.visit("/");
    cy.registerUser();
    cy.get("a[href='/logout']").click();
  });

  it("should not register a new user with existing email", () => {

    // 1. Launch browser:
    // 2. Navigate to url 'http://automationexercise.com':
    // 3. Verify that home page is visible successfully:
    cy.visitAndVerifyHomePage();

    // 4. Click on 'Signup / Login' button:
    cy.get("[href='/login']").click();

    // 5. Verify 'New User Signup!' is visible:
    cy.get(".signup-form h2").should("be.visible");

    // 6. Enter name and already registered email address:
    const email = Cypress.env('EMAIL');
    const name = Cypress.env('NAME');

    cy.get("[data-qa='signup-name']").type(name);
    cy.get("[data-qa='signup-email']").type(email);

    // 7. Click 'Signup' button:
    cy.get("[data-qa='signup-button']").click();

    // 8. Verify error 'Email Address already exist!' is visible:
    cy.xpath("//*[text()='Email Address already exist!']").should("be.visible");
  });

})
