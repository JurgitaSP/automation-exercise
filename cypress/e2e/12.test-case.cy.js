/// <reference types = "cypress" />

describe('Add Products in Cart', () => {
    it('should add products in cart', () => {

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
cy.visitAndVerifyHomePage();

// 4. Click 'Products' button
cy.get('[href="/products"]').click();

// 5. Hover over first product and click 'Add to cart'


// 6. Click 'Continue Shopping' button
// 7. Hover over second product and click 'Add to cart'
// 8. Click 'View Cart' button
// 9. Verify both products are added to Cart
// 10. Verify their prices, quantity and total price

    })
})