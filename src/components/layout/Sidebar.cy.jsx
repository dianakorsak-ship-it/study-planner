import { mount } from 'cypress/react';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('показує пункти меню', () => {
    mount(
      <MemoryRouter>
        <Sidebar active="home" />
      </MemoryRouter>,
    );
    cy.contains('Головна');
    cy.contains('Додати завдання');
    cy.contains('Виконані завдання');
    cy.contains('Вийти з акаунта');
  });
});
