/// <reference types = "cypress" />

describe('template spec', () => {
    it('passes', () => {

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        // 3. Verify that home page is visible successfully
        cy.visitAndVerifyHomePage();

        // 4. Click on 'Products' button
        cy.get('[href="/products"]').click();

        // 5. Verify user is navigated to ALL PRODUCTS page successfully
        cy.url().should('include', '/products');
        cy.get('.title.text-center').should('have.text', 'All Products')

        // 6. Enter product name in search input and click search button
        cy.get('#search_product').type('Fancy Green Top');
        cy.get('#submit_search').click();

        // 7. Verify 'SEARCHED PRODUCTS' is visible
        cy.url().should('include', '/products?search=Fancy%20Green%20Top');
        cy.get('.productinfo > p').should('have.text', 'Fancy Green Top');
    
        // 8. Verify all the products related to search are visible



    })
})