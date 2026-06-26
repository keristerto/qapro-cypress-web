describe("Login", () => {

   it("Login com sucesso", () => {
      cy.visit('https://automationpratice.com.br/login')
      cy.get('#user').type('kterto@gmail.com')
      cy.get('#password').type('123456')
      cy.get('#btnLogin').click()
      cy.get('#swal2-title')
         .should('be.visible')
         .should('have.text', 'Login realizado')

   })
   it("Login com email inválido", () => {
      cy.visit('https://automationpratice.com.br/login')
      cy.get('#btnLogin').click()
      cy.get('.invalid_input').should('be.visible').should('have.text', 'E-mail inválido.')

   })

   it("Login com senha inválido", () => {
      cy.visit('https://automationpratice.com.br/login')
      cy.get('#user').type('kterto@gmail.com')
      cy.get('#btnLogin').click()
      cy.get('.invalid_input').should('be.visible').should('have.text', 'Senha inválida.')

   })
})