/// <reference types = "cypress" />

describe('Register User with existing email', () => {
    it('passes', () => {

        //  1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        // 3. Verify that home page is visible successfully
        cy.visitAndVerifyHomePage();

        // 4. Click on 'Signup / Login' button
        cy.get('[href="/login"]').click();

        // 5. Verify 'New User Signup!' is visible
        cy.get('.signup-form h2').should('have.text', 'New User Signup!');

        // 6. Enter name and already registered email address
        const name = Cypress.env('NAME');
        const email = Cypress.env('EMAIL');

        cy.get('[data-qa="signup-name"]').type('NAME');
        cy.get('[data-qa="signup-email"]').type('EMAIL');

        // 7. Click 'Signup' button
        cy.get('[data-qa="signup-button"]').click();

        // 8. Verify error 'Email Address already exist!' is visible
         cy.contains('Email Address already exist!').should('be.visible');


    })
})