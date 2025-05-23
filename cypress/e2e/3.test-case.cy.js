/// <reference types = "cypress" />

describe('Login User with incorrect email and password', () => {
    it('should not login user with incorrect email and password', () => {

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        // 3. Verify that home page is visible successfully
        cy.visitAndVerifyHomePage();

        // 4. Click on 'Signup / Login' button
        // 5. Verify 'Login to your account' is visible
        // 6. Enter incorrect email address and password
        // 7. Click 'login' button
        // 8. Verify error 'Your email or password is incorrect!' is visible
        cy.loginUserWithIncorrectEmailAndPassword();

    });
})