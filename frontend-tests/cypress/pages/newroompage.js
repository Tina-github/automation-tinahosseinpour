/// <reference types="cypress" />
// elements
const titleOfNewroomPage = 'Testers Hotel'
const categoryTextfield = ':nth-child(1) > select'
const numberTextfield = ':nth-child(2) > input'
const floorTextfield = ':nth-child(3) > input'
const availableCheckbox = '.checkbox'
const priceTextfield = ':nth-child(5) > input'
const featuresTextfield = ':nth-child(6) > select'
const saveButtom = '.blue'

// functions /actions
function checkTitleOfNewroomPage(cy){
    cy.title().should('eq' , titleOfNewroomPage)

}
function performNewroom(cy,category,number, floor ,price , contentToConfirm){

    cy.get(categoryTextfield).select(category)
    cy.get(numberTextfield).type(number)
    cy.get(floorTextfield).type(floor)
    cy.get(availableCheckbox).click()
    cy.get(priceTextfield).type(price)
    cy.get(featuresTextfield).select('penthouse')
    cy.get(saveButtom).click()
    cy.contains(contentToConfirm)

}

//exports

module.exports = {

    checkTitleOfNewroomPage,
    performNewroom
}






