const express = require('express')
const TransactionController = require('./controllers/TransactionController')
/*const RoomController = require('./controllers/RoomController')*/

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'index'})) //req - requisicao, res - resposta
route.get('/customers', (req,res) => res.render("customers", {page: 'customers'}))
route.get('/transactions', (req,res) => res.render("transactions", {page: 'transactions'}))

/*route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', QuestionController.create)
//format that the form inside the modal has to pass the information
route.post('/question/:room/:question/:action', QuestionController.index)*/
route.post('/customers/:sender/:receiver/:amount', QuestionController.index)

module.exports = route