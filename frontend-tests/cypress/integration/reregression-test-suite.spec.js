/// <reference types="cypress" />
//This is a test suite

describe('Regression test suite',function(){

    // This is a test case
    it('perform valid login',function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Testers Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get('.user > .btn').click()
        cy.contains('Login')


    })
    // This is a  second test case
    it('perform valid create room ',function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Testers Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
    
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Rooms')
        cy.get('h2 > .btn').click()
        cy.contains('New Room')
        cy.get(':nth-child(1) > select').select('Double')
        cy.get(':nth-child(2) > input').type('103')
        cy.get(':nth-child(3) > input').type('1')
        cy.get('.checkbox').click()
       // cy.get('[type="checkbox"]').check()
       cy.get(':nth-child(5) > input').type('1500')
       cy.get('[value="ensuite"]')
       cy.get('.blue').click()
       cy.contains('Rooms')

       cy.get(':nth-child(3) > .btn').click()
       cy.contains('Tester Hotel Overview')
       cy.get('.user > .btn').click()
        cy.contains('Login')


    })
    // This is a 3th tast case
    it('perform valid create client ',function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Testers Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')

        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.contains('Clients')
        cy.get('h2 > .btn').click()
        cy.contains('New Client')
        cy.get(':nth-child(1) > input').type('Tina')
        cy.get(':nth-child(2) > input').type('farzaneh.hosseinpour@gmail.com')
        cy.get(':nth-child(3) > input').type('0704353790')
        cy.get('.blue').click()
        cy.contains('Clients')
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get('.user > .btn').click()
        cy.contains('Login')


    })
    //This is a 4th test case 
    it('perform valid create bill ',function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Testers Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')

        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Bills')
        cy.get('h2 > .btn').click()
        cy.contains('New Bill')
        cy.get('input').type('6000')
        cy.get('.checkbox').click()
        cy.get('.blue').click()
        cy.contains('Bills')
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Tester Hotel Overview')

        cy.get('.user > .btn').click()
        cy.contains('Login')

     })
      // This is a 5th test case
      it('perform valid create reservation ',function(){ 
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Testers Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')

        cy.get(':nth-child(4) > .btn').click()
        cy.contains('Reservations') 
        cy.get('h2 > .btn').click()
        cy.contains('New Reservation')
        cy.get(':nth-child(1) > input').type('2020-10-10')
        cy.get(':nth-child(2) > input').type('2020-10-14')
        cy.get(':nth-child(3) > select').select('Tina (#3)')
     
       // cy.get(':nth-child(4) > select').select('Floor 1,Room 103')
      
        cy.get(':nth-child(5) > select').select('ID: 2')
        cy.get('.blue').click()
        cy.contains('Reservations')
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Tester Hotel Overview')

        cy.get('.user > .btn').click()
        cy.contains('Login')



    
     })
    })