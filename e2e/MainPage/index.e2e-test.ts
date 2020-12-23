// import '@jest/core'
// import 'cypress';
// import { before } from 'mocha';

describe('MainPage', () => {
  before(() => {
    cy.visit('/')
  })

  describe('Load MainPage', () => {
    it('Check content', () => {
      cy.contains('#__next > div', 'Main Page')
    })
  })
})

export default true
