import { newsCategories } from '../../src/helper-functions'

describe('fit-2-print', () => {

  beforeEach(() => {
    cy.visit(`http://localhost:3000`)
  })

  it('when the app is visited for the first time, the user sees a list of top stories', () => {
    cy.get('h1').contains('TOP STORIES')
  })

  it('when the user taps on an article thumbnail, they will see article details including image caption, author, tags, summary etc', () => {
    cy.get('div[class=top-thumbnail]').click()
    cy.get('figure').should('exist')
    cy.get('figcaption').should('exist')
    cy.get('div[class=tag-container]').should('exist')
    cy.get('h2').should('exist')
  })

  it('article details should have a button to take the user back to the main articles list', () => {
    cy.get('div[class=top-thumbnail]').click()
    cy.get('button').contains('⬅').click()
    cy.get('div[class=article-container').should('exist')
  })

  it('the top stories button on the bottom nav bar should also navigate back to the main page', () => {
    cy.get('div[class=top-thumbnail]').click()
    cy.get('button').contains('TOP STORIES').click()
    cy.get('div[class=article-container').should('exist')
  })

  it('the categories button should provide a list of buttons to filter by news category', () => {
    cy.get('button').contains('CATEGORIES').click()
    newsCategories.forEach(category => {
      cy.get('button').contains(category.proper).should('exist')
    })
  })
  
  it('when a category is selected, should automatically redirect to the main article list and show only articles from the selected category', () => {
    cy.get('button').contains('CATEGORIES').click()
    cy.get('button').contains('Business').click()
    cy.get('h1').contains('BUSINESS')
  })

})