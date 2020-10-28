/// <reference types="cypress" />
import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as roomsFuncs from '../pages/roomsPage'
import * as newroomFuncs from '../pages/newroompage'
import * as clientsFuncs from '../pages/clientspage'
import * as newclientFuncs from '../pages/newclientpage'
import * as billsFuncs from '../pages/billspage'
import * as newbillFuncs from '../pages/newbillpage'
import * as reservationsFuncs from '../pages/reservationspage'
import * as newreservationFuncs from '../pages/newreservationpage'




// test suite
describe('Test suite' , function(){
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
        indexFuncs.checkTitleOfIndexPage(cy)
    })

    // test case 1
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
        newclientFuncs.performNewclient(cy, 'Tina', 'farzaneh.hosseinpour@gmail.com', '0704353790', 'Clients')
        dashboardFuncs.performLogout(cy, 'Login')

     })

     // test case 4
     it('perform creat bill', function(){
        indexFuncs.performValidLogin(cy, 'tester01' , 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
       dashboardFuncs.navigateToBillsPage(cy,'Bills')
        billsFuncs.performCreatBill(cy , 'New Bill')
        newbillFuncs.performNewbill(cy , '6000' ,'Bills')
        dashboardFuncs.performLogout(cy, 'Login')

     })

     it('perform creat reservation', function(){
        indexFuncs.performValidLogin(cy, 'tester01' , 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
       dashboardFuncs.navigateToReservationsPage(cy,'Reservations')
    reservationsFuncs.performCreatReservation(cy , 'New Reservation')
    newreservationFuncs.performNewreservation(cy , '2020-10-10','2020-10-14', 'Tina (#3)', 'ID: 2', 'Reservations')
        dashboardFuncs.performLogout(cy, 'Login')

     })





})