let todoModel = require('../data/todo.schema')

/*
const = constantentes
let = variables
var = variables globales
*/

/*
{} = objecto
[] = arreglo
 */


const todoService = {
    createTodo: (request, response) => {
        todoModel.create(request.body, (err, data) => {
            if(err) {
                response.status(400).json(err)
            }else{
                response.status(200).json(data)
            }
        })

        // response.json({})
    },

    readTodo: (request, response) => {
        todoModel.findById(request.params.id, (err, data) => {
            if(err) {
                response.status(400).json(err)
            }else{
                response.status(200).json(data)
            }
        })

        // response.json({})
    },

    readTodos: (request, response) => {
        todoModel.find((err, data) => {
            if(err) {
                response.status(400).json(err)
            }else{
                response.status(200).json(data)
            }
        })
        // response.json([])
    },

    updateTodo: (request, response) => {
        todoModel.findByIdAndUpdate(request.params.id, {
            $set: request.body
        }, (err, data) => {
            if(err) {
                response.status(400).json(err)
            }else{
                response.status(200).json(data)
            }
        })
        // response.json({})
    },

    deleteTodo: (request, response) => {
        todoModel.findByIdAndRemove(request.params.id, (err, data) => {
            if(err) {
                response.status(400).json(err)
            }else{
                response.status(200).json(data)
            }
        })
        // response.json({})
    }
}


module.exports = todoService