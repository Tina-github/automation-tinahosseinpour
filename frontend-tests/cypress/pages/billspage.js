// <reference types="cypress" />
// elements 
const tiltleOfbillsPage ='Testers Hotel'
const creatBillButton ='h2 > .btn'

//functions 
function checkTitleOfbillsPage(cy){
    cy.title().should('eq',tiltleOfbillsPage)

}
function performCreatBill(cy, contentToConfirm){
    cy.get(creatBillButton).click()
    cy.contains(contentToConfirm)
}

    //exports
    module.exports ={
        checkTitleOfbillsPage,
        performCreatBill
}