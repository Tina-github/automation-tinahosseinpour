/// <reference types="cypress" />
// elements
const titleOfNewreservationPage = 'Testers Hotel'
const startTextfield = ':nth-child(1) > input'
const endTextfield = ':nth-child(2) > input'
const clientTextfield = ':nth-child(3) > select'
//const roomTextfield = ':nth-child(4) > select'
const billTextfield = ':nth-child(5) > select'
const saveButtom = '.blue'

// functions /actions
function checkTitleOfNewreservationPage(cy){
    cy.title().should('eq' , titleOfNewreservationPage)

}
function performNewreservation(cy, start, end ,client, bill, contentToConfirm){

    cy.get(startTextfield).type(start)
    cy.get(endTextfield).type(end)
    cy.get(clientTextfield).select(client)
    cy.get(billTextfield).select(bill)
    cy.get(saveButtom).click()
    cy.contains(contentToConfirm)

}

//exports

module.exports = {

    checkTitleOfNewreservationPage,
    performNewreservation
}

