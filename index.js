require('dotenv').config()
/*
let dotenv = require('dotenv')
dotenv.config()
 */
let express = require('express');
let bodyParser = require('body-parser')
let cors = require('cors')
let mongoose = require('mongoose')

let todoService = require('./services/todo.service')

// conexion a la base de datos (MongoDB)
mongoose.connect(process.env.DB).then(()=>{
    console.log('connection succeded')
}).catch((error) => {
    console.log('connection failed', error)
})

// app tendra la configuracion de mi servidor
let app = express()
// agregar middleware al servidor
app.use(bodyParser.json())
app.use(cors())

// .use crea rutas de mi servidor,
// param1 = ruta del servidor,
// param2 = funcion de la ruta

// CRUD (Create Read Update Delete) - ABC (Altas Bajas Cambios)
app.post('/api/create-todo', (request, response) => {
    console.log('REQUEST ->', {url: request.url, params: request.params, query: request.query, body: request.body})
    todoService.createTodo(request, response)
})

app.get('/api/read-todo/:id', (request, response) => {
    console.log('REQUEST ->', {url: request.url, params: request.params, query: request.query, body: request.body})
    todoService.readTodo(request, response)
})

app.get('/api/read-todo', (request, response) => {
    console.log('REQUEST ->', {url: request.url, params: request.params, query: request.query, body: request.body})
    todoService.readTodos(request, response)
})

app.put('/api/update-todo/:id', (request, response) => {
    console.log('REQUEST ->', {url: request.url, params: request.params, query: request.query, body: request.body})
    todoService.updateTodo(request, response)
})

app.delete('/api/delete-todo/:id', (request, response) => {
    console.log('REQUEST ->', {url: request.url, params: request.params, query: request.query, body: request.body})
    todoService.deleteTodo(request, response)
})

app.use('/hola', (request, response) => {
    response.send('Ok')
})

app.use('/', (request, response) => {
    response.send('Ok')
})

// puerto de mi servidor
let port = process.env.PORT

let server = app.listen(port)

