import loginPage from '../pages/LoginPage';
import inventoryPage from '../pages/InventoryPage';

describe('Carrinho - adicionar item', () => {
  let creds;

  before(() => {
    cy.fixture('credentials').then((data) => (creds = data));
  });

  it('Deve adicionar o primeiro item ao carrinho e mostrar badge = 1', () => {
    // login
    cy.login(creds.valid.username, creds.valid.password);
    // garantir que está na página de produtos
    inventoryPage.assertOnPage();

    // adicionar primeiro item e validar badge
    inventoryPage.addFirstItemToCart();
    inventoryPage.cartBadgeShouldBe(1);

    // abrir carrinho
    inventoryPage.openCart();
    cy.url().should('include', '/cart.html');
  });
});
