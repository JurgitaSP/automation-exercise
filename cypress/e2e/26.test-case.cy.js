/// <reference types = "cypress" />

describe('Verify Scroll Up Without "Arrow" Button And Scroll Down functionality', () => {
    it('passes', () => {

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        // 3. Verify that home page is visible successfully
        cy.visitAndVerifyHomePage();

        // 4. Scroll down page to bottom
        cy.scrollTo('bottom');

        // 5. Verify 'SUBSCRIPTION' is visible
        cy.get('.single-widget h2')
            .should('have.text', 'Subscription')
            .and('be.visible');

        // 6. Scroll up page to top
        cy.scrollTo('top');

        // 7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
        cy.get('.active > :nth-child(1) > h2')
            .should('have.text', 'Full-Fledged practice website for Automation Engineers')
            .and('be.visible');
            
    })
})