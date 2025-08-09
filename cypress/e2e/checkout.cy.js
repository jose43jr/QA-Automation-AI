import loginPage from '../pages/LoginPage';
import inventoryPage from '../pages/InventoryPage';
import cartPage from '../pages/CartPage';
import checkoutPage from '../pages/CheckoutPage';

describe('Checkout - fluxo feliz', () => {
  let creds;

  before(() => {
    cy.fixture('credentials').then((data) => (creds = data));
  });

  it('Deve finalizar a compra com sucesso', () => {
    // login
    cy.login(creds.valid.username, creds.valid.password);
    inventoryPage.assertOnPage();

    // adicionar item e ir ao carrinho
    inventoryPage.addFirstItemToCart();
    inventoryPage.cartBadgeShouldBe(1);
    inventoryPage.openCart();

    // carrinho
    cartPage.assertOnPage();
    cartPage.assertItemsCountAtLeast(1);
    cartPage.clickCheckout();

    // checkout step 1
    checkoutPage.assertStepOne();
    checkoutPage.fillCustomerInfo('Jose', 'Feitosa', '65000-000');
    checkoutPage.continue();

    // checkout step 2
    checkoutPage.assertStepTwo();
    checkoutPage.finish();

    // confirmação
    checkoutPage.assertComplete();
  });
});
