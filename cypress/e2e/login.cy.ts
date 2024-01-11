describe('Login auth', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get(':nth-child(1) > .flex-1').type('admin')
    cy.get(':nth-child(2) > .flex-1').type('admin')
    cy.get('.bg-violet-500').click()
  })
})
