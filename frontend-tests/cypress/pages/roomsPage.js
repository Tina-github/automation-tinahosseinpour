/// <reference types="cypress" />
// elements 
const tiltleOfroomsPage ='Testers Hotel'
const creatRoomButton ='h2 > .btn'


//functions 
function checkTitleOfroomsPage(cy){
    cy.title().should('eq',tiltleOfroomsPage)

}
function performCreatRoom(cy, contentToConfirm){
    cy.get(creatRoomButton).click()
    cy.contains(contentToConfirm)

}

    //exports
    module.exports ={
        checkTitleOfroomsPage,
        performCreatRoom
}