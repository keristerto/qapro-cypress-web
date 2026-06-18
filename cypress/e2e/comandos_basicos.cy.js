///<reference types="cypress"/>
describe("Comandos básicos", () => {

    it("Acessar la URL", () => {
        cy.visit('https://automationpratice.com.br/')


    });

    it.skip("Encontrar un Elemento", () => {
        cy.visit('https://automationpratice.com.br/')
        cy.get('#user')

    })

    it("Preencher um campo", () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('keris@gmail.com')
        cy.get('#password').type('123456')


    })
    it("Click", () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('keris@gmail.com')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click
    })
    it("Selec /Dropdown", () => {

        cy.visit('https://automationpratice.com.br/checkout-one')
        cy.get('#country').select('usa')


    })
    it("Checkbox/Radio", () => {

        cy.visit('https://automationpratice.com.br/checkout-one')
        cy.get('#materialUnchecked').check()
    })
    it.only("Validar Elementos", () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#createAccount')
            .should('be.visible')
            .should('have.text', 'Ainda não tem conta?')




    })

})