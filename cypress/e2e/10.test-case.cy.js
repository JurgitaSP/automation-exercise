/// <reference types = "cypress" />

describe('Verify Subscription in home page', () => {
    it('should verify subscription in home page', () => {

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        // 3. Verify that home page is visible successfully
        cy.visitAndVerifyHomePage();

        // 4. Scroll down to footer
        cy.get('#footer').scrollIntoView();

        // 5. Verify text 'SUBSCRIPTION'
        cy.get('.single-widget h2')
            .should('have.text', 'Subscription')
            .and('be.visible');

        // 6. Enter email address in input and click arrow button
        cy.get('#susbscribe_email').type('rightemail@example.com');
        cy.get('#subscribe').click();

        // 7. Verify success message 'You have been successfully subscribed!' is visible
        cy.get('#success-subscribe')
        .invoke('text')
        .should('be.visible')
        .and('include', 'You have been successfully subscribed!')
    })
})