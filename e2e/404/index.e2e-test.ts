// import '@jest/core'
// import 'cypress';
// import { before } from 'mocha';

describe('404 page', () => {
  before(() => {
    cy.visit('/404', {
      failOnStatusCode: false,
    })
  })

  describe('Load 404 page', () => {
    it('Check content', () => {
      cy.contains('#__next > h2', '404 - Page Not Found')
    })
  })
})

export default true
