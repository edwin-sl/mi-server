let mongoose = require('mongoose')
let Schema = mongoose.Schema

let todoSchema = new Schema({
    // atributos (DB no-relacional) -> columnas (DB relacional)
    title: {
        type: String
    },
    description: {  
         type: String
    },
    priority: {
        type: String
    }
}, {
    // collection (DB no-relacional) -> tabla (DB relacional)
    collection: 'todos'
})

module.exports = mongoose.model('Todo', todoSchema)

