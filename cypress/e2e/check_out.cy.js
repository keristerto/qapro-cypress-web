///<reference types="cypress"/>

describe('check_out', () => {
    beforeEach(() => {
        cy.visit('https://automationpratice.com.br/checkout-one')
    })
    it("campo first name vazio", () => {
        cy.get('.checkout-area-bg > .theme-btn-one')
            .click()
        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo First Name deve ser prenchido')
    })

    it("campo last name vazio",()=>{
      cy.get('.form-control').eq(0)
            .type('keris')
        cy.get('.checkout-area-bg > .theme-btn-one')
            .click()
         cy.get(':nth-child(2) > .form-group > #errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo Last Name deve ser prenchido')

    })

    it("campo empresa vazio",()=>{
      cy.get('.form-control').eq(0)
            .type('keris')
      cy.get('.form-control').eq(1)
            .type('Terto')      
      cy.get('.checkout-area-bg > .theme-btn-one')
            .click()   
      cy.get('.errorLabel').eq(0)
            .should('be.visible')
            .should('have.text', 'O campo Company deve ser prenchido')

    })


    it("campo email vazio",()=>{
      cy.get('.form-control').eq(0)
            .type('keris')
      cy.get('.form-control').eq(1)
            .type('Terto')  
       cy.get('.form-control').eq(2)
            .type('mtp')           
      cy.get('.checkout-area-bg > .theme-btn-one')
            .click()   
      cy.get('.errorLabel').eq(0)
            .should('be.visible')
            .should('have.text', 'O campo E-mail deve ser prenchido ou é inválido')

    })

    it("campo country vazio",()=>{
        cy.get('.form-control').eq(0)
            .type('keris')
        cy.get('.form-control').eq(1)
            .type('Terto')  
        cy.get('.form-control').eq(2)
            .type('mtp')     
        cy.get('.form-control').eq(3)
            .type('kterto@gmail.com')      
        cy.get('.checkout-area-bg > .theme-btn-one')
            .click()   
        cy.get('.errorLabel').eq(0)
            .should('be.visible')
            .should('have.text', 'O campo Country deve ser prenchido')

    })
it("campo state/city vazio",()=>{
        cy.get('.form-control').eq(0)
            .type('keris')
        cy.get('.form-control').eq(1)
            .type('Terto')  
        cy.get('.form-control').eq(2)
            .type('mtp')     
        cy.get('.form-control').eq(3)
            .type('kterto@gmail.com')      
        cy.get('.form-control').eq(4)
            .select('usa')
        cy.get('.checkout-area-bg > .theme-btn-one')
            .click()   
        cy.get('.errorLabel').eq(0)
            .should('be.visible')
            .should('have.text', 'O campo City deve ser prenchido')

    })

    it("campo zip code vazio",()=>{
        cy.get('.form-control').eq(0)
            .type('keris')
        cy.get('.form-control').eq(1)
            .type('Terto')  
        cy.get('.form-control').eq(2)
            .type('mtp')     
        cy.get('.form-control').eq(3)
            .type('kterto@gmail.com')      
        cy.get('.form-control').eq(4)
            .select('usa')
        cy.get('.form-control').eq(5)
            .select('Aland Islands')
        cy.get('.checkout-area-bg > .theme-btn-one')
            .click()   
        cy.get('.errorLabel').eq(0)
            .should('be.visible')
            .should('have.text', 'O campo Zip Code deve ser prenchido')

    })

     it("campo Address vazio",()=>{
        cy.get('.form-control').eq(0)
            .type('keris')
        cy.get('.form-control').eq(1)
            .type('Terto')  
        cy.get('.form-control').eq(2)
            .type('mtp')     
        cy.get('.form-control').eq(3)
            .type('kterto@gmail.com')      
        cy.get('.form-control').eq(4)
            .select('usa')
        cy.get('.form-control').eq(5)
            .select('Aland Islands')
        cy.get('.form-control').eq(6)
            .type('123456')
        cy.get('.checkout-area-bg > .theme-btn-one')
            .click()   
        cy.get('.errorLabel').eq(0)
            .should('be.visible')
            .should('have.text', 'O campo Address deve ser prenchido')

    })

        
    })
