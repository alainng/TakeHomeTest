import { BasePage } from "./basePage.cy"

export class HomePage extends BasePage {

    visitAndWaitUntilOnPage(){
        cy.visit('/').url().should('include','cypress')
    }

    //Element getters
    getLovedByOSSHeader(){
        return cy.contains('h2','Loved by')
    }

    getWeeklyDownloadsNumber(){
        return cy.contains('div','Weekly downloads').prev()
    }

    getHeaderCompany(){
        return cy.get('button[id="dropdownCompany"]')
    }

    getAboutCypress(){
        return cy.contains('span','About Cypress')
    }

    getHeaderInstall(){
        return cy.get('button[data-cy="header-install"]')
    }

    getHeaderProduct(){
        return cy.get('button[id="dropdownProduct"]')
    }

    getInstallModalCopyButton(){
        return cy.get('button[data-cy="modal-install-copy"]')
    }

    getVisualReviews(){
        return cy.contains('span','Visual Reviews')
    }

    getSmartOrchestration(){
        return cy.contains('span','Smart Orchestration')
    }


    //Page interactions
    clickHeaderCompany(){
        this.getHeaderCompany().click()
    }

    clickHeaderProduct(){
        this.getHeaderProduct().click()
    }

    clickHeaderInstall(){
        this.getHeaderInstall().click()
    }

    clickInstallModalCopyButton(){
        this.getInstallModalCopyButton().click()
    }

    clickAboutCypress(){
        this.getAboutCypress().click()
    }

    clickVisualReviews(){
        this.getVisualReviews().click()
    }

    clickSmartOrchestration(){
        this.getSmartOrchestration().click()
    }


}