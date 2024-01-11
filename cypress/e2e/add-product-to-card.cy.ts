describe('Add product to card', () => {
  it('should be able to the product page and add it to the cart', () => {
    cy.visit('http://localhost:3000')
    cy.get(':nth-child(1) > .flex-1').type('admin')
    cy.get(':nth-child(2) > .flex-1').type('admin')
    cy.get('.bg-violet-500').click()

    cy.visit('http://localhost:3000/product/1')
    cy.get('.h-12').click()
  })
})
