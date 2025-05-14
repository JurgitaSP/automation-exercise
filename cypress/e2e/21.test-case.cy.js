/// <reference types = "cypress" />

describe('Add review on product', () => {
    it('should add review on product', () => {

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        cy.visit('/');
        cy.url().should('eq', 'https://automationexercise.com/');

        // 3. Click on 'Products' button
        cy.get('[href="/products"]').click();

        // 4. Verify user is navigated to ALL PRODUCTS page successfully
        cy.url().should('include', '/products');
        cy.get('.title.text-center').should('have.text', 'All Products')

        // 5. Click on 'View Product' button
        cy.get('[href="/product_details/1"]').click();

        // 6. Verify 'Write Your Review' is visible
        cy.get('[href="#reviews"]')
        .should('be.visible');

        // 7. Enter name, email and review
        cy.get('#name').type('userName');
        cy.get('#email').type('user@Email');
        cy.get('#review').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.');

        // 8. Click 'Submit' button
        cy.get('#button-review').click();

        // 9. Verify success message 'Thank you for your review.'
        cy.get('.alert-success > span')
        .should('exist')
        .should('have.text', 'Thank you for your review.');
       
    })
})