/// <reference types = "cypress" />

describe('Login User with correct email and password', () => {
    it('passes', () => {

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        // 3. Verify that home page is visible successfully
        cy.visitAndVerifyHomePage();

        // 4. Click on 'Signup / Login' button
        // 5. Verify 'Login to your account' is visible
        // 6. Enter correct email address and password
        // 7. Click 'login' button
        // 8. Verify that 'Logged in as username' is visible
        cy.get('[href="/login"]').click();
        cy.get('.login-form h2').should('have.text', 'Login to your account');
        cy.get('[data-qa="login-email"]').type('Junius.Romaguera77@hotmail.com');
        cy.get('[data-qa="login-password"]').type('MDgTLFc4EPMgGFs');
        cy.get('[data-qa="login-button"]').click();
        cy.get(':nth-child(10) > a').should('have.text', ` Logged in as ${'Stella Collier'}`);

        // 9. Click 'Delete Account' button
        // 10. Verify that 'ACCOUNT DELETED!' is visible
        cy.deleteAccount();
    })
})
