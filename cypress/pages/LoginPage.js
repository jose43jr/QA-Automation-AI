class LoginPage {
  visit() {
    cy.visit('/');
  }

  typeUsername(username) {
    cy.get('[data-test="username"]').clear().type(username);
  }

  typePassword(password) {
    cy.get('[data-test="password"]').clear().type(password);
  }

  submit() {
    cy.get('[data-test="login-button"]').click();
  }

  assertLoggedIn() {
    cy.url().should('include', '/inventory.html');
    cy.contains('.title', 'Products').should('be.visible');
  }

  assertErrorContains(text) {
    cy.get('[data-test="error"]').should('contain', text);
  }
}

export default new LoginPage();
