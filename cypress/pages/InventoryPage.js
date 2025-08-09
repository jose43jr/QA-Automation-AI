class InventoryPage {
  assertOnPage() {
    cy.contains('.title', 'Products').should('be.visible');
  }

  addFirstItemToCart() {
    cy.get('.inventory_item').first().within(() => {
      cy.contains('button', 'Add to cart').click();
    });
  }

  openCart() {
    cy.get('.shopping_cart_link').click();
  }

  cartBadgeShouldBe(qty) {
    cy.get('.shopping_cart_badge').should('have.text', String(qty));
  }
}

export default new InventoryPage();
