describe('visit search engines and grab search results', () => {
  it('navigates to google and enters search query, logging out the url of the first result', () => {
    const search = Cypress.env('search')

    cy.writeFile('./cypress/e2e/results.json', { search });

    cy.visit('https://google.com');

    cy.get('input[name="q"]').type(`${search}{enter}`, { delay: 500 });

    cy.get('#search a')
      .first()
      .invoke('attr', 'href')
      .then((href) => cy.writeFile('./cypress/e2e/results.json', { source: 'google', href }, { flag: 'a+' }));
  })

  it('navigates to duckduckgo and enters search query, logging out the url of the first result', () => {
    const search = Cypress.env('search')

    cy.visit('https://duckduckgo.com/');

    cy.get('input[name="q"]')
      .type(`${search}{enter}`, { delay: 500 })

    cy.get('[data-testid= "result-title-a"]')
      .first()
      .invoke('attr', 'href')
      .then((href) => cy.writeFile('./cypress/e2e/results.json', { source: 'duckduckgo', href }, { flag: 'a+' }))
  })

  it('navigates to neeva and enters search query, logging out the url of the first result', () => {
    const search = Cypress.env('search')

    cy.visit('https://neeva.com/');

    cy.get('input[name="q"]')
      .type(`${search}{enter}`, { delay: 500 })

    cy.get('[data-gtid="result-item"]')
      .first()
      .get('.lib-doc-title__link-1b9rC')
      .invoke('attr', 'href')
      .then((href) => cy.writeFile('./cypress/e2e/results.json', { source: 'neeva', href }, { flag: 'a+' }))
  })

  it('navigates to bing and enters search query, logging out the url of the first result', () => {
    const search = Cypress.env('search')

    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    })

    cy.visit('https://www.bing.com/');

    cy.get('input[name="q"]')
      .type(`${search}{enter}`, { delay: 500 })

    cy.get('#b_results > li.b_algo > h2.b_topTitle > a')
      .invoke('attr', 'href')
      .then((href) => cy.writeFile('./cypress/e2e/results.json', { source: 'bing', href }, { flag: 'a+' }))

  })
})