/// <reference types="cypress" />
import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as roomsFuncs from '../pages/roomsPage'
import * as newroomFuncs from '../pages/newroompage'
import * as clientsFuncs from '../pages/clientspage'
import * as billsFuncs from '../pages/billspage'
import * as reservationsFuncs from '../pages/reservationspage'



// test suite
describe('Test suite' , function(){
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
        indexFuncs.checkTitleOfIndexPage(cy)
    })

    // test case
     it ('perform login and logout', function(){
         indexFuncs.performValidLogin(cy, 'tester01' , 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
         dashboardFuncs.performLogout(cy, 'Login')

     })

     // test case 2
     it('perform creat room', function(){
        indexFuncs.performValidLogin(cy, 'tester01' , 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
       dashboardFuncs.navigateToRoomsPage(cy,'Rooms')
        roomsFuncs.performCreatRoom(cy , 'New Room')
        newroomFuncs.performNewroom(cy,'Double','103','1','1500', 'Rooms' )
        dashboardFuncs.performLogout(cy, 'Login')


     })
     // test case 3
     it('perform creat client', function(){
        indexFuncs.performValidLogin(cy, 'tester01' , 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
       dashboardFuncs.navigateToClientsPage(cy,'Clients')
        clientsFuncs.performCreatClient(cy , 'New Client')
        dashboardFuncs.performLogout(cy, 'Login')

     })

     // test case 4
     it('perform creat bill', function(){
        indexFuncs.performValidLogin(cy, 'tester01' , 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
       dashboardFuncs.navigateToBillsPage(cy,'Bills')
        billsFuncs.performCreatBill(cy , 'New Bill')
        dashboardFuncs.performLogout(cy, 'Login')

     })

     it('perform creat reservation', function(){
        indexFuncs.performValidLogin(cy, 'tester01' , 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
       dashboardFuncs.navigateToReservationsPage(cy,'Reservations')
    reservationsFuncs.performCreatReservation(cy , 'New Reservation')
        dashboardFuncs.performLogout(cy, 'Login')

     })





})