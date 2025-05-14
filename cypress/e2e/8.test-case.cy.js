/// <reference types = "cypress" />

describe('Verify All Products and product detail page', () => {
    it('should verify all products and product detail page', () => {

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        // 3. Verify that home page is visible successfully
        cy.visitAndVerifyHomePage();

        // 4. Click on 'Products' button
        cy.get('[href="/products"]').click();

        // 5. Verify user is navigated to ALL PRODUCTS page successfully
        // 6. The products list is visible
        cy.url().should('include', '/products');
        cy.get('.title.text-center')
            .should('have.text', 'All Products')
            .and('be.visible');

        // 7. Click on 'View Product' of first product
        cy.get('[href="/product_details/1"]').click();

        // 8. User is landed to product detail page
        cy.url().should('include', '/product_details/1');

        // 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
        cy.get('.product-information h2').should('be.visible');
        cy.get('.product-information > :nth-child(3)').should('be.visible');
        cy.get(':nth-child(5) > span').should('be.visible');
        cy.get('.product-information > :nth-child(6)').should('be.visible');
        cy.get('.product-information > :nth-child(7)').should('be.visible');
        cy.get('.product-information > :nth-child(8)').should('be.visible');

    })
})