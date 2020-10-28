/// <reference types="cypress" />
// elements
const titleOfIndexPage = 'Testers Hotel'
const usernameTextfield = ':nth-child(1) > input'
const passwordTextfield = ':nth-child(2) > input'
const loginButtom = '.btn'


// functions /actions
function checkTitleOfIndexPage(cy){
    cy.title().should('eq' , titleOfIndexPage)

}
function performValidLogin(cy , username , password,contenToConfirm ){
    cy.get(usernameTextfield).type(username)
    cy.get(passwordTextfield).type(password)
    cy.get(loginButtom).click()
    cy.contains(contenToConfirm)

}

// exports
module.exports = {
    checkTitleOfIndexPage,
    performValidLogin

}