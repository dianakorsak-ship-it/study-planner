import { mount } from 'cypress/react';
import { MemoryRouter } from 'react-router-dom';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/login.json*', {
      body: { id: 1, email: 'student@gmail.com', password: 12345 },
    }).as('login');

    mount(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );
  });

  it('показує помилку при неправильних даних', () => {
    cy.get('input[type="email"]').type('a@a.com');
    cy.get('input[type="password"]').type('1');
    cy.get('button').click();
    cy.contains('Неправильна пошта або пароль');
  });

  it('не показує помилку при правильних даних', () => {
    cy.get('input[type="email"]').type('student@gmail.com');
    cy.get('input[type="password"]').type('12345');
    cy.get('button').click();
    cy.wait('@login');
    cy.contains('Неправильна пошта або пароль').should('not.exist');
  });
});
