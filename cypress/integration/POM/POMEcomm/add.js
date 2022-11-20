
import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../HomePage"
let selector = new HomePage

Given('visit the ecomm sites', function () {
    // cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    (selector.visitUrl());
})

When('search the products start from {string}', function (title) {
    // cy.get('.search-keyword').type(page);
    selector.enterText(title)
    // cy.get('.search-button').click();
    selector.clickBtn()

})

And('add {string} in the carts', function (veg) {
    cy.get('h4[class="product-name"]').each((el, i) => {
        cy.log(el.text());
        let vegitable1 = el.text().replace('- 1 Kg', ' ').trim()
        if (vegitable1 == veg)
            cy.get('[class="product-action"] button').eq(i).click()
    })
})

Then('place order and select the countries and check condition', function () {
    cy.get('img[alt="Cart"]').click();
    cy.get('[class ="action-block"] button').first().click();
    cy.contains('Place Order').click();
    cy.get('select').select('India');
    cy.get('[class="chkAgree"]').click();
    cy.get('button').click();
})

And('validate the thank you message!!', function () {
    cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible');
})