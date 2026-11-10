import { mount } from 'cypress/react';
import { MemoryRouter } from 'react-router-dom';
import AddTaskPage from './AddTaskPage';

describe('AddTaskPage', () => {
  it('показує форму додавання завдання', () => {
    mount(
      <MemoryRouter>
        <AddTaskPage />
      </MemoryRouter>,
    );
    cy.get('form').should('exist');
    cy.get('input').should('exist');
  });
});
