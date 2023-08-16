import { BasePage } from "./basePage.cy"

export class CloudPage extends BasePage {

    visitAndWaitUntilOnPage(){
        cy.visit('/cloud').url().should('include','/cloud')
    }

    //Element getters
    getVisualReviews(){
        return cy.contains('p','Visual Reviews')
    }

    getTestAnalytics(){
        return cy.contains('p','Test Analytics')
    }


    //Page interactions

    scrollToTestAnalytics(){
        this.getTestAnalytics().scrollIntoView()
    }

}