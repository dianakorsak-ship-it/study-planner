import { mount } from 'cypress/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout', () => {
  it('показує меню і вміст сторінки', () => {
    mount(
      <MemoryRouter>
        <Layout active="home">
          <p>Вміст сторінки</p>
        </Layout>
      </MemoryRouter>,
    );
    cy.contains('Планер навчання');
    cy.contains('Вміст сторінки');
  });
});
