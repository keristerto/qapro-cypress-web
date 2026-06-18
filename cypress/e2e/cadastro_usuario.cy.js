
///<reference types="cypress"/>
describe("cadastro de usuario", () => {


    beforeEach(() => {
    cy.visit('https://automationpratice.com.br/register')
  })
    it("campo nome vazio", () => {
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo nome deve ser prenchido')
    })
    it("campo email vazio", () =>{
        cy.get('#user').type('Keris')
        cy.get('#btnRegister').click()
         cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')

    })
    it("campo senha vazio", () => {
        cy.get('#user').type('Keris')
        cy.get('#email').type('kterto@gmail.com')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    })
    it("cadastro com sucesso", () => {
        cy.get('#user').type('Keris')
        cy.get('#email').type('kterto@gmail.com')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click()
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')
    })

})