/// <reference types="cypress" />
// elements 
const tiltleOfclientsPage ='Testers Hotel'
const creatClientButton ='h2 > .btn'

//functions 
function checkTitleOfclientsPage(cy){
    cy.title().should('eq',tiltleOfclientsPage)

}
function performCreatClient(cy, contentToConfirm){
    cy.get(creatClientButton).click()
    cy.contains(contentToConfirm)
}

    //exports
    module.exports ={
        checkTitleOfclientsPage,
        performCreatClient
}