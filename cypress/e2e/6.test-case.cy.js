/// <reference types = "cypress" />

describe('Contact Us Form', () => {
    it('should fill up "contact us" form', () => {

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
        cy.get('[data-qa="name"]').type('Junius');
        cy.get('[data-qa="email"]').type('validuser@example.com');
        cy.get('[data-qa="subject"]').type('subject');
        cy.get('[data-qa="message"]').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')

        // 7. Upload file
        cy.xpath("//input[@type='file' and @name='upload_file']").attachFile("filesToUpload/text.txt");

        // 8. Click 'Submit' button
        cy.get('[data-qa="submit-button"]').click();

        // 9. Click OK button
        // Cypress automatically clicks "OK" on alerts, though possible solution could be:
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('Press OK to proceed!');
            return true;
        });

        // 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Success! Your details have been submitted successfully.');
        });
        
        // 11. Click 'Home' button and verify that landed to home page successfully
        cy.get("ul.nav > li > [href='/']").click();
        cy.url().should('eq', 'https://automationexercise.com/');
        
    })
})