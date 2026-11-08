import { mount } from 'cypress/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('показує завдання з API', () => {
    cy.intercept('GET', '**/users.json*', {
      body: [
        {
          id: 1,
          title: 'Тестове завдання',
          subject: 'Математика',
          date: '2026-11-10',
          priority: 'Високий',
          done: false,
        },
        {
          id: 2,
          title: 'Виконане завдання',
          subject: 'Англійська',
          date: '2026-11-11',
          priority: 'Середній',
          done: true,
        },
      ],
    });

    mount(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    cy.contains('Мої завдання');
    cy.contains('Тестове завдання');
    cy.contains('Виконане завдання');
  });
});
