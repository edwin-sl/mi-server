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
// TODO: crear api
app.post('/api/create-todo', (request, response) => {
    console.log('PARAMS ->', request.params)
    console.log('QUERYSTRING -> ', request.query)
    console.log('BODY -> ', request.body)
    // response.send('Crear TODO')
    todoService.createTodo(request, response)
})

app.get('/api/read-todo/:id', (request, response) => {
    console.log('PARAMS ->', request.params)
    console.log('QUERYSTRING -> ', request.query)
    console.log('BODY -> ', request.body)
    // response.send('Read TODO')
    todoService.readTodo(request, response)
})

app.get('/api/read-todo', (request, response) => {
    console.log('PARAMS ->', request.params)
    console.log('QUERYSTRING -> ', request.query)
    console.log('BODY -> ', request.body)
    // response.send('Read TODOS')
    todoService.readTodos(request, response)
})

app.put('/api/update-todo/:id', (request, response) => {
    console.log('PARAMS ->', request.params)
    console.log('QUERYSTRING -> ', request.query)
    console.log('BODY -> ', request.body)
    // response.send('Update TODO')
    todoService.updateTodo(request, response)
})

app.delete('/api/delete-todo/:id', (request, response) => {
    console.log('PARAMS ->', request.params)
    console.log('QUERYSTRING -> ', request.query)
    console.log('BODY -> ', request.body)
    // response.send('Delete TODO')
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

