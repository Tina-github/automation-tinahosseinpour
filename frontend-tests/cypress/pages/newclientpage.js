/// <reference types="cypress" />
// elements
const titleOfNewclientPage = 'Testers Hotel'
const nameTextfield = ':nth-child(1) > input'
const emailTextfield = ':nth-child(2) > input'
const telefoneTextfield = ':nth-child(3) > input'
const saveButtom = '.blue'

// functions /actions
function checkTitleOfNewclientPage(cy){
    cy.title().should('eq' , titleOfNewclientPage)

}
function performNewclient(cy,name ,email , telefone, contentToConfirm){

    cy.get(nameTextfield).type(name)
    cy.get(emailTextfield).type(email)
    cy.get(telefoneTextfield).type(telefone)
    cy.get(saveButtom).click()
    cy.contains(contentToConfirm)
}

//exports

module.exports = {

    checkTitleOfNewclientPage,
    performNewclient
}