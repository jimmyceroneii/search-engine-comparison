describe('visit search engines and grab search results', () => {
  it('navigates to google and enters search query, logging out the url of the first result', () => {
    const search = Cypress.env('search');

    cy.visit('https://google.com');

    cy.get('input[name="q"]').type(`${search}{enter}`, { delay: 25 });

    cy.writeFile('./cypress/e2e/results/google.json', '[\n');

    cy.get('#search a').each(($el, index) => {
      cy.writeFile(
        './cypress/e2e/results/google.json',
        `${JSON.stringify({ [`google${index}`]: $el[0].href })},`,
        { flag: 'a+' }
      );
    });

    cy.writeFile('./cypress/e2e/results/google.json', '\n]', {
      flag: 'a+',
    });
  });

  it('navigates to duckduckgo and enters search query, logging out the url of the first result', () => {
    const search = Cypress.env('search');

    cy.visit('https://duckduckgo.com/');

    cy.get('input[name="q"]').type(`${search}{enter}`, { delay: 500 });

    cy.writeFile('./cypress/e2e/results/duckduckgo.json', '[\n');

    cy.get('[data-testid= "result-title-a"]').each(($el, index) => {
      cy.writeFile(
        './cypress/e2e/results/duckduckgo.json',
        `${JSON.stringify({ [`duckduckgo${index}`]: $el[0].href })},`,
        { flag: 'a+' }
      );
    });

    cy.writeFile('./cypress/e2e/results/duckduckgo.json', '\n]', {
      flag: 'a+',
    });
  });

  it('navigates to neeva and enters search query, logging out the url of the first result', () => {
    const search = Cypress.env('search');

    cy.visit('https://neeva.com/');

    cy.get('input[name="q"]').type(`${search}{enter}`, { delay: 500 });

    cy.writeFile('./cypress/e2e/results/neeva.json', '[\n');

    cy.get('a').each(($el, index) => {
      cy.writeFile(
        './cypress/e2e/results/neeva.json',
        `${JSON.stringify({ [`neeva${index}`]: $el[0].href })},`,
        { flag: 'a+' }
      );
    });

    cy.writeFile('./cypress/e2e/results/neeva.json', '\n]', { flag: 'a+' });
  });

  it('navigates to bing and enters search query, logging out the url of the first result', () => {
    const search = Cypress.env('search');

    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    cy.visit('https://www.bing.com/');

    cy.get('input[name="q"]').type(`${search}{enter}`, { delay: 500 });

    cy.writeFile('./cypress/e2e/results/bing.json', '[\n');

    cy.get('a').each(($el, index) => {
      cy.writeFile(
        './cypress/e2e/results/bing.json',
        `${JSON.stringify({ [`bing${index}`]: $el[0].href })},`,
        { flag: 'a+' }
      );
    });

    cy.writeFile('./cypress/e2e/results/bing.json', '\n]', { flag: 'a+' });
  });
});
