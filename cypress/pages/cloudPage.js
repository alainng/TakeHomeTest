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

    getTabTestAnalytics(){
        return cy.get('a[href="#test_analytics"]')
    }


    //Page interactions

    scrollToTestAnalytics(){
        this.getTestAnalytics().scrollIntoView()
    }

}