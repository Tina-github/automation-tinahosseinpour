/// <reference types="cypress" />
// elements 
const tiltleOfroomsPage ='Testers Hotel'
const creatReservationButton ='h2 > .btn'

//functions 
function checkTitleOfreservationsPage(cy){
    cy.title().should('eq',tiltleOfreservationsPage)

}
function performCreatReservation(cy, contentToConfirm){
    cy.get(creatReservationButton).click()
    cy.contains(contentToConfirm)
}

    //exports
    module.exports ={
        checkTitleOfreservationsPage,
        performCreatReservation
}