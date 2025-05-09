/// <reference types = "cypress" />

describe('Verify Test Cases Page', () => {
    it('passes', () => {

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        // 3. Verify that home page is visible successfully
        cy.visitAndVerifyHomePage();

        // 4. Click on 'Test Cases' button
        cy.get('.active > :nth-child(1) > .test_cases_list > .btn').click();
      

        // 5. Verify user is navigated to test cases page successfully
        cy.url().should('include', '/test_cases');
        cy.get('.panel-group h5').should('contain', 'Below is the list of test Cases');

    })
})