class CartPage {
  assertOnPage() {
    cy.url().should('include', '/cart.html');
    cy.contains('.title', 'Your Cart').should('be.visible');
  }

  assertItemsCountAtLeast(qty) {
    cy.get('.cart_item').should('have.length.at.least', qty);
  }

  clickCheckout() {
    cy.get('[data-test="checkout"]').click();
  }
}

export default new CartPage();
