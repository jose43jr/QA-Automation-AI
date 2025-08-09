class CheckoutPage {
  // Etapa 1: informações do cliente
  assertStepOne() {
    cy.url().should('include', '/checkout-step-one.html');
    cy.contains('.title', 'Checkout: Your Information').should('be.visible');
  }

  fillCustomerInfo(firstName, lastName, postalCode) {
    cy.get('[data-test="firstName"]').clear().type(firstName);
    cy.get('[data-test="lastName"]').clear().type(lastName);
    cy.get('[data-test="postalCode"]').clear().type(postalCode);
  }

  continue() {
    cy.get('[data-test="continue"]').click();
  }

  // Etapa 2: overview da compra
  assertStepTwo() {
    cy.url().should('include', '/checkout-step-two.html');
    cy.contains('.title', 'Checkout: Overview').should('be.visible');
    cy.get('.summary_total_label').should('contain', 'Total'); // valida que há resumo
  }

  finish() {
    cy.get('[data-test="finish"]').click();
  }

  // Confirmação
  assertComplete() {
    cy.url().should('include', '/checkout-complete.html');
    cy.contains('.complete-header', 'Thank you for your order!').should('be.visible');
  }
}

export default new CheckoutPage();
