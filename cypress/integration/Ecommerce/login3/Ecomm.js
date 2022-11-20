
import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";


Given('visit Practice Automation site on login', function () {
    cy.log('given')
    cy.visit('https://practice.automationtesting.in/my-account/')

})

When('enter the Username and Password', function (DataTable) {
    DataTable.hashes().forEach(element => {
        cy.log('when')
        cy.get('#username').type(element.Username)
        cy.get('#password').type(element.Password)
    });
})

Then('click on submit Button', function () {
    cy.log('then')
    cy.get('[name= "login"]').click()
})

And('validate the Dashboard text', function () {
    cy.log('and')
    cy.get('.is-active> a').should('have.text', "Dashboard")

})

When(`enter the {string} and {string}`, function (Username,Password) {
    cy.log('when')
    cy.get('#username').type(Username)
    cy.get('#password').type(Password)
})

