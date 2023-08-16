import { HomePage } from "../pages/homePage.cy"
import { CloudPage } from "../pages/cloudPage"
import { AboutUsPage } from "../pages/aboutUsPage"

let homePage, cloudPage, aboutUsPage

context('Regression tests', () => {

    beforeEach(() => {
        cy.viewport('macbook-16')
        homePage = new HomePage()
        homePage.visitAndWaitUntilOnPage()
    })

    it('verifies the presence of the weekly downloads number',() => {
        homePage.getLovedByOSSHeader().scrollIntoView().should('be.visible')
        homePage.getWeeklyDownloadsNumber().should('have.text','5.0M+')
    })

    it('verifies Header navigation to About us page',() => {
        aboutUsPage = new AboutUsPage()
        homePage.clickHeaderCompany()
        homePage.getAboutCypress().should('be.visible')
        homePage.clickAboutCypress()
        
        //verify landed on page
        aboutUsPage.getAboutUs().should('be.visible')
        cy.url().should('include','/about-us')

    })

    it('verifies Install button copies instal cypress command',() => {
        homePage.clickHeaderInstall()
        homePage.clickInstallModalCopyButton()
        cy.assertValueCopiedToClipboard('npm install cypress --save-dev')
    })

    it('verifies Header navigation to the visual reviews page',() => {
        cloudPage = new CloudPage()
        homePage.clickHeaderProduct()
        homePage.getVisualReviews().should('be.visible')
        homePage.clickVisualReviews()
        
        //verify landed on page
        cloudPage.getVisualReviews().should('be.visible')
        cy.url().should('include','/#visual_reviews')
    })

    it('(bonus) verifies green circle around Test Analytics tab',() => {
        cloudPage = new CloudPage()
        homePage.clickHeaderProduct()
        homePage.getSmartOrchestration().should('be.visible')
        homePage.clickSmartOrchestration()

        cloudPage.getTestAnalytics().should('be.visible')
        cloudPage.scrollToTestAnalytics()
        cy.get('a[href="#test_analytics"]').should('have.css', 'border-top-color', 'rgb(163, 231, 203)')
        cy.get('a[href="#test_analytics"]').should('have.css', 'border-bottom-color', 'rgb(163, 231, 203)')
        cy.get('a[href="#test_analytics"]').should('have.css', 'border-left-color', 'rgb(163, 231, 203)')
        cy.get('a[href="#test_analytics"]').should('have.css', 'border-right-color', 'rgb(163, 231, 203)')
    })

})
