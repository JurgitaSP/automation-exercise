/// <reference types = "cypress" />

describe('Verify Subscription in Cart page', () => {
    it('passes', () => {

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        // 3. Verify that home page is visible successfully
        cy.visitAndVerifyHomePage();

        // 4. Click 'Cart' button
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();

        // 5. Scroll down to footer
        cy.get('#footer').scrollIntoView();

        // 6. Verify text 'SUBSCRIPTION'
        cy.get('.single-widget h2')
            .should('have.text', 'Subscription')
            .and('be.visible');

        // 7. Enter email address in input and click arrow button
        cy.get('#susbscribe_email').type('rightemail@example.com');
        cy.get('#subscribe').click();

        // 8. Verify success message 'You have been successfully subscribed!' is visible
        cy.get("#success-subscribe")
            .invoke("text")
            .then((text) => {
                expect(text.trim()).to.equal("You have been successfully subscribed!");
            });

    })
})