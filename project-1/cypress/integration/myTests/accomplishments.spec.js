/*global someFunction, cy*/
/*eslint no-undef: "error"*/
/// <reference types="cypress" />

describe("Accomplishments dashboard", () => {
    beforeEach(() => {
        cy.visit("/accomplishments")
    })

    it("Should showcase error if information is missing", () => {
        cy.get("[data-cy='accomplishment-title-input']").type("My Basketball Accomplishment")
        cy.get("[data-cy='accomplishment-input']").type("I made 10 points")
        cy.contains("Submit Accomplishment").click()
        cy.contains("Complete the items above to continue").should("be.visible")
    })

    it("Should display validation component if all information is inputted", () => {
        cy.get("[data-cy='accomplishment-title-input']").type("My Basketball Accomplishment")
        cy.get("[data-cy='accomplishment-input']").type("I made 10 points")
        cy.get("[type='checkbox']").click()
        cy.contains("Submit Accomplishment").click()
        cy.contains("This Accomplishment was Successfully Submitted").should("be.visible")
    })

    it("Should return back to accomplishment dashboard with empty inputs when go back button is clicked", () => {
        cy.get("[data-cy='accomplishment-title-input']").type("My Basketball Accomplishment")
        cy.get("[data-cy='accomplishment-input']").type("I made 10 points")
        cy.get("[type='checkbox']").click()
        cy.contains("Submit Accomplishment").click()
        cy.contains("Go Back").click()
        cy.contains("h2", "Accomplishment").should("be.visible")
        cy.get("[data-cy='accomplishment-title-input']").should("have.value", "")
        cy.get("[data-cy='accomplishment-input']").should("have.value", "")
        cy.get("[type='checkbox']").should("not.have.checked")
    })
})