
import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

Given('visit orange HRM site', function () {
    cy.log('given')
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    When('enter the orange HRM valid Username', function () {
        cy.log('when')
        cy.get('[name = "username"]').type('Admin')
    })

    And('enter orange HRM valid Password', function () {
        cy.log('and')
        cy.get('[name="password"]').type('admin123')
    })

    Then('click on orange HRM login Button', function () {
        cy.log('then')
        cy.get('[type="submit"]').click()
    })

    And('validate the orange HRM Dashboard', function () {
        cy.log('and')
        cy.contains('Admin').should('be.visible')
        cy.contains('Dashboard').click()
        cy.contains('Launching Soon').should('be.visible')
    })

})