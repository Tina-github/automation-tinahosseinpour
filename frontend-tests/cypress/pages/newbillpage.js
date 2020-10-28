/// <reference types="cypress" />
// elements
const titleOfNewbillPage = 'Testers Hotel'
const valueTextfield = 'input'
const paidCheckbox = '.checkbox'
const saveButtom = '.blue'

// functions /actions
function checkTitleOfNewbillPage(cy){
    cy.title().should('eq' , titleOfNewbillPage)

}
function performNewbill(cy,value, contentToConfirm){

   cy.get(valueTextfield).type(value)
   cy.get(paidCheckbox).click()
    cy.get(saveButtom).click()
    cy.contains(contentToConfirm)

}

//exports

module.exports = {

    checkTitleOfNewbillPage,
    performNewbill
}

