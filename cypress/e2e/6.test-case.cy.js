/// <reference types = "cypress" />

describe('Contact Us Form', () => {
    it('passes', () => {

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        // 3. Verify that home page is visible successfully
        cy.visitAndVerifyHomePage();

        // 4. Click on 'Contact Us' button
        cy.get('[href="/contact_us"]').click();

        // 5. Verify 'GET IN TOUCH' is visible
        cy.get('.contact-form h2')
            .should('have.text', 'Get In Touch')
            .and('be.visible');

        // 6. Enter name, email, subject and message
        cy.get('[data-qa="name"]').type('validuser@example.com');
        cy.get('[data-qa="email"]').type('correctpassword');
        cy.get('[data-qa="subject"]').type('subject');
        cy.get('[data-qa="message"]').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')

        // 7. Upload file
        cy.get(':nth-child(6) > .form-control').click()

        // 8. Click 'Submit' button
        cy.get('[data-qa="submit-button"]').click();

        // 9. Click OK button

        // 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
        cy.get('.status alert alert-success').should('have.text', 'Success! Your details have been submitted successfully.');

        // 11. Click 'Home' button and verify that landed to home page successfully
        cy.get('.btn btn-success').click();
        cy.url().should('include', '/');


    })
})