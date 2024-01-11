describe('Search product', () => {
  it('should be search some product', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[name=user]').type("admin");
    cy.get('input[name=password]').type("admin");
    cy.get("#button").click();

    // cy.get('input[name=q]').type('side').parent('form').submit();
  })
})