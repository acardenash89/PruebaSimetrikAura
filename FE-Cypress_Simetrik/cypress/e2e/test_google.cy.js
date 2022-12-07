describe('Test google', () => {
  it('Sign in to Google correctly', () => {
    cy.visit('https://www.google.com.co')
    cy.get('.gLFyf').click()
    cy.get('.gLFyf').type('Simetrik')
    cy.get('.gLFyf').type('{enter}')
    cy.get('#result-stats')

    it('count result values', () => {
      cy.get('#result-stat').then((results) => {
          if (results.find('#result-stat"]') > 0) {
            cy.print('La cantidad de resultados es mayor que cero')
        
          }
          else {
            cy.print('La cantidad de resultados es menor o igual que cero')
            
          }
      })
      
  })    
  

  })
})