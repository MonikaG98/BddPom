

import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

Given('visit practice automation site', function () {
    cy.log('given')
    cy.visit('https://practicetestautomation.com/practice-test-login/')


    When('enter the Valid Username', function () {
        cy.log('when')
        cy.get('#username').type('student')
    })
    And('enter the Valid Password', function () {
        cy.log('and')
        cy.get('#password').type('Password123')
    })
    Then('click on Submit Button', function () {
        cy.log('then')
        cy.get('#submit').click()
    })
    And('Validate the Dashboard', function () {
        cy.log('and')
        cy.get('.post-title').should('have.text', 'Logged In Successfully')
        cy.get('.has-text-align-center').should('have.text', 'Congratulations student. You successfully logged in!')
    })

    // Invalid
    When('Enter the invalid Username', function () {
        cy.log('when')
        cy.get('#username').type('student123')
    })
    And('Enter the invalid Password', function () {
        cy.log('and')
        cy.get('#password').type('Password')
    })
    And('Validate the Error', function () {
        cy.get('#error').should('have.text', 'Your username is invalid!')
    })






})


