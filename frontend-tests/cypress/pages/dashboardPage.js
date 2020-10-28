/// <reference types="cypress" />
// elements 
const tiltleOfDashboardPage ='Testers Hotel'
const logoutButton ='.user > .btn'
const  navRoomLink = ':nth-child(1) > .btn'
const navClientLink = '.blocks > :nth-child(2) > .btn'
const navBillLink = ':nth-child(3) > .btn'
const navReservationLink = ':nth-child(4) > .btn'

//functions/actions
 function checkTitleOfDashboardPage(cy){
     cy.title().should('eq',tiltleOfDashboardPage)

 }
 function performLogout(cy, contentToConfirm){
     cy.get(logoutButton).click()
     cy.contains(contentToConfirm)
 }
 function navigateToRoomsPage(cy, contentToConfirm){
     cy.get(navRoomLink).click()
     cy.contains(contentToConfirm)
 }
 function navigateToClientsPage(cy, contentToConfirm){
    cy.get(navClientLink).click()
    cy.contains(contentToConfirm)
 }
 function navigateToBillsPage(cy, contentToConfirm){
    cy.get(navBillLink).click()
    cy.contains(contentToConfirm)
    }

    function navigateToReservationsPage(cy, contentToConfirm){
        cy.get(navReservationLink).click()
        cy.contains(contentToConfirm)
    }



//exports 
module.exports ={
    checkTitleOfDashboardPage,
    performLogout,
    navigateToRoomsPage,
    navigateToClientsPage,
    navigateToBillsPage,
    navigateToReservationsPage

}

