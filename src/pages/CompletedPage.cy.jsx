import { mount } from 'cypress/react';
import { MemoryRouter } from 'react-router-dom';
import CompletedPage from './CompletedPage';

describe('CompletedPage', () => {
  it('показує заголовок сторінки', () => {
    mount(
      <MemoryRouter>
        <CompletedPage />
      </MemoryRouter>,
    );
    cy.contains('Твої маленькі перемоги');
  });
});
