

import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

let id ;
Given('user send Get Request to retrieve multiple users', function () {
    cy.request({
        method: "GET",
        url: "https://reqres.in/api/users?page=2"
    }).as('getUser')

})

Then('User list should be display', function () {
    cy.get('@getUser').then(function (response) {
        cy.log(response)
        expect(response.status).to.eq(200)
        expect(response.statusText).to.eq("OK")
        expect(response.body.page).to.eq(2)
    })
})

Given('user send Post Request to retrieve multiple users with {string} and {string}', function (name, job) {
    cy.request({
        method: "POST",
        url: "https://reqres.in/api/users",
        body: {
            "name": name,
            "job": job
        }
    }).as('CreateUser')

})

Then('user should be Created with {string} and {string}', function (name, job) {
    cy.get('@CreateUser').then(function (response) {
        cy.log(response)
        expect(response.status).to.eq(201)
        expect(response.statusText).to.eq("Created")
        expect(response.body.name).to.eq(name)
        expect(response.body.name).to.eq(name)
        expect(response.body.job).to.eq(job)
         id = response.body.id
    })
})


Given('user send Put Request to Update multiple users with {string} and {string}', function (name, job) {
    cy.request({
        method: "PUT",
        url: `https://reqres.in/api/users/${id}`,
        body: {
            "name": name,
            "job": job
        }
    }).as('UpdateUser')

})

Then('user should be Updated with {string} and {string}', function (name, job) {
    cy.get('@UpdateUser').then(function (response) {
        cy.log(response)
        expect(response.status).to.eq(200)
        expect(response.statusText).to.eq("OK")
        expect(response.body.name).to.eq(name)
        // expect(response.body.name).to.eq(name)
        expect(response.body.job).to.eq(job)

    })
})
