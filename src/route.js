const express = require('express')
const TransactionController = require('./controllers/TransactionController')
/*const RoomController = require('./controllers/RoomController')*/

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'home'})) //req - requisicao, res - resposta
route.get('/customers', (req,res) => res.render("index", {page: 'customers'}))
route.get('/transactions', (req,res) => res.render("index", {page: 'transactions'}))

/*route.post('/customers', TransactionController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', QuestionController.create)
//format that the form inside the modal has to pass the information
route.post('/question/:room/:question/:action', QuestionController.index)*/
/*route.post('/customers/:sender/:receiver/:amount', TransactionController.index)*/

module.exports = route