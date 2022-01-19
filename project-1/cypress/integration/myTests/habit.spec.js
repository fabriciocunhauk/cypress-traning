/// <reference types="cypress" />

describe("Testing habit dashboard", () => {
    beforeEach(() => {
        cy.visit("/habits")
    })

    it("Should display modal when add button is clicked", () => {

        // Get button and click it
        cy.contains("button", "Add").click()

        // Get modal
        cy.contains("Add a new habit").should("be.visible")
    })

    it("Should display habit card when new habit is added", () => {

        // Get button and click it
        cy.get("#habit-add-btn").click()

        // Get input and add text
        cy.get("input[placeholder='Habit']").type("Gaming")

        // Get button save changes and click it
        cy.contains("Save Changes").click()

        // Get saved item and check if exists
        cy.contains("Gaming")
        .should("be.visible")
        .and("have.class", "HabitCard__habit-container")
    })

    it("Should toggle icon when habit is clicked", () => {

        // Get button and click it
        cy.get("#habit-add-btn").click()

        // Get input and add text
        cy.get("input[placeholder='Habit']").type("Gaming")

        // Get button save changes and click it
        cy.contains("Save Changes").click()

        // Check if card icon Changes
        cy.get("[src='/static/media/close.fa7e5ead.svg']").should("be.visible")
        cy.contains("Gaming").click()
        cy.get("[src='/static/media/check.9e8832df.svg']").should("be.visible")
    })
})