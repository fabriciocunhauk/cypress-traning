/// <reference types="cypress" />

describe("Locate elements in a page", () => {
    beforeEach(() => {
        cy.visit("/elements")
    })

    it("should locate elements in the elements page", () => {

        //Best way to locate by using (data attribute)

        // Get all elements by data attribute testId
         cy.get("[data-cy='btn-id-1']")
         // Using custom command
        cy.getByTestId("btn-id-1")

         //Not ideal locators

        // Get all elements by tag name
        cy.get("button")

        // Get element by class name
        cy.get(".btn-with-class")

        // Get all elements with specific classes using []
        cy.get("[class='Elements-btn btn-with-class more-btn-classes']")
        cy.get("[class='Elements-btn btn-with-class']")

        // Get all elements by id
        cy.get("#btn-with-id")

        // Get all elements by attribute using []
        cy.get("[type='submit']")

        // Get all elements by tag name and class
        cy.get("button.Elements-btn")

        // Get all elements by tag name, class and id
        cy.get("button.Elements-btn#btn-with-id")

        // Get all elements by tag name, class and type
        cy.get("button.Elements-btn[type='submit']")
    })
})