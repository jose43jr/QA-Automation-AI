import loginPage from '../pages/LoginPage';

describe('Login - SauceDemo (POM + Fixtures + Commands)', () => {
  let creds;

  before(() => {
    cy.fixture('credentials').then((data) => { creds = data; });
  });

  it('Deve logar com credenciais válidas', () => {
    cy.login(creds.valid.username, creds.valid.password);
    loginPage.assertLoggedIn();
  });

  it('Deve exibir erro com senha inválida', () => {
    cy.login(creds.invalid.username, creds.invalid.password);
    loginPage.assertErrorContains('Username and password do not match');
  });
});
  it('Deve exigir usuário e senha (campos vazios)', () => {
    cy.visit('/');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain', 'Username is required');
  });
