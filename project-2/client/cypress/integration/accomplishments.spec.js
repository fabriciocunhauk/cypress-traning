/*global someFunction, cy*/
/*eslint no-undef: "error"*/
/// <reference types="cypress" />

describe("Accomplishments dashboard", () => {
    beforeEach(() => {
        cy.visit("/accomplishments")
    })

    it("Should display inappropriate content error message", () => {
        cy.get("[placeholder='Title']").type("This is my accomplishment")
        cy.get("[placeholder='My accomplishment...']").type("I pet a giraffe")
        cy.get("[type='checkbox']").click()
        cy.get("button").click()
        cy.contains("Your content is not appropriate").should("be.visible")
    })

    // Using mock data for testing with function handler

    it("Should display inappropriate content error message with mock", () => {

        cy.intercept("POST", "http://localhost:4000", (req) => {
            req.reply((res) => {
                res.send({
                    msg: "Your content is not appropriate"
                })
            })
        })

        cy.get("[placeholder='Title']").type("This is my accomplishment")
        cy.get("[placeholder='My accomplishment...']").type("I pet a giraffe")
        cy.get("[type='checkbox']").click()
        cy.get("button").click()
        cy.contains("Your content is not appropriate").should("be.visible")
    })
})