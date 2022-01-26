
describe('Login', () => {
  it('User should be looged in', () => {
    cy.viewport(1920, 1000);
    
    cy.visit('https://parodify.herokuapp.com/users/sign_in');


    cy.get('#user_email').type('papito@qa.ninja');
    cy.get('#user_password').type('pwd123');
    cy.get('input[value = "Log in"]').click();

  });

  it('Incorrect password', () => {
    cy.viewport(1920, 1000);
    
    cy.visit('https://parodify.herokuapp.com/users/sign_in');

    cy.get('#user_email').type('papito@qa.ninja');
    cy.get('#user_password').type('pwd23');
    cy.get('input[value = "Log in"]').click();

    cy.get('.message-body')
      .should('contain', 'Oops! Email e/ou senha incorretos.')
  });
});