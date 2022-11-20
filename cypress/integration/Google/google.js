import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('I open Google page', function () {
    cy.visit(url)
})

Given('I open youtube home page', function () {
    cy.visit('https://youtube.com')
})

Then(`I see {string} in the title`, (title) => {
    cy.title().should('include', title)
})



