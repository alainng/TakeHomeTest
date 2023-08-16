import { BasePage } from "./basePage.cy"

export class AboutUsPage extends BasePage {

    visitAndWaitUntilOnPage(){
        cy.visit('/about-us').url().should('include','/about-us')
    }

    //Element getters
    getAboutUs(){
        return cy.contains('h1','About us')
    }

    //Page interactions

}