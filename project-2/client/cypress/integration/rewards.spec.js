/*global someFunction, cy*/
/*eslint no-undef: "error"*/
/// <reference types="cypress" />

describe("Rewards dashboard", () => {
    beforeEach(() => {
        cy.visit("/rewards")
    })

    it("Should display a list of rewards", () => {
        cy.get("ul")
        .should("contain", "500 points for drinking 8 cups of water for 7 straight days")
        .and("contain", "850 points for fasting for 5 days straight")
    })
    
    //  Mock request using intercept and fixture examples

    it("Should display a list of rewards with a mock request", () => {
        cy.intercept("GET", "http://localhost:4000/rewards", { 
            fixture: "rewards.json"
        })

        cy.get("ul")
        .should("contain", "500 points for drinking 8 cups of water for 7 straight days")
        .and("contain", "850 points for fasting for 5 days straight")
    })
})