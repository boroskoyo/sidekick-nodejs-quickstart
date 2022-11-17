describe('empty spec', () => {

  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000/speakers')
    })


  it('get error results', () => {
    const getError = {
      url: 'http://localhost:8081/api/events/errorstack',
      headers: {
        'Authorization': 'Bearer apikey'
      }
    };
    const clearError = {
      method: 'POST',
      url: 'http://localhost:8081/api/events/flush?eventType=ERROR_STACK_SNAPSHOT',
      headers: {
        'Authorization': 'Bearer apikey'
      }
    };
    cy.api(getError)
    cy.request(clearError)
  })
})

