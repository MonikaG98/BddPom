
import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

let file1 = "DSC_2348.JPG"

Given('visit Automation Exercise site for login',function(){
cy.visit('https://automationexercise.com/login')
})


When('enter User and Password',function(){
cy.get('[name="email"]').first().type('gauri@gmail.com')
cy.get('[name="password"]').type('Gauri99')
})

Then('click login button',function(){
cy.get('[data-qa="login-button"]').click()
})

And('validate the Dashboard',function(){
cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
})

Given('open the contach us page',function(){
cy.get('[href="/contact_us"]').click()
})

When('add your details',function(){
cy.get('[name="name"]').type("monika")
cy.get('[name="email"]').type("gosavimonika01@gmail.com")
cy.get('[name="subject"]').type('information')
cy.get('[id="message"]').type('give information about your page')
cy.get('[name="upload_file"]').attachFile(file1)
cy.get('[name="submit"]').click()
})

Then('validate the file upload message',function(){
cy.get('[class="status alert alert-success"]').should('have.text','Success! Your details have been submitted successfully.')
})     

