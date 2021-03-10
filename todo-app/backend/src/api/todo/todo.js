/* Mapear o OBJ para o ducumento do mongo */

const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: { type: String, required: true},
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now}
})

// tudo no module.export eh visivel pra fora do arquivo e pode ser usado por outra pessoa
module.exports = restful.model('Todo', todoSchema)