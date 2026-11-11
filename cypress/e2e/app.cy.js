describe('Планер навчання', () => {
  it('відкриває головну сторінку', () => {
    cy.visit('/');
    cy.contains('Планер навчання');
    cy.contains('Мої завдання');
  });

  it('переходить на сторінку додавання завдання', () => {
    cy.visit('/');
    cy.get('a[href="/add"]').click();
    cy.url().should('include', '/add');
  });

  it('переходить на сторінку виконаних завдань', () => {
    cy.visit('/');
    cy.get('a[href="/completed"]').click();
    cy.url().should('include', '/completed');
    cy.contains('Твої маленькі перемоги');
  });

  it('показує помилку при неправильному вході', () => {
    cy.intercept('GET', '**/login.json*', {
      body: { id: 1, email: 'student@gmail.com', password: 12345 },
    });
    cy.visit('/login');
    cy.get('input').first().type('wrong@gmail.com');
    cy.get('input').last().type('0000');
    cy.get('form').submit();
    cy.contains('Неправильна пошта або пароль');
  });

  it('входить з правильними даними', () => {
    cy.intercept('GET', '**/login.json*', {
      body: { id: 1, email: 'student@gmail.com', password: 12345 },
    });
    cy.visit('/login');
    cy.get('input').first().type('student@gmail.com');
    cy.get('input').last().type('12345');
    cy.get('form').submit();
    cy.url().should('not.include', '/login');
  });
});
