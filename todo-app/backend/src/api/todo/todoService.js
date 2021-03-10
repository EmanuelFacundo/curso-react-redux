/*  */

const Todo = require('./todo') //obter resultado do metodo "restful.model('Todo', todoSchema)"

Todo.methods(['get', 'post', 'put', 'delete']) // API REST padrao
Todo.updateOptions({new: true, runValidators: true}) // Retornar regristro atualizado e validar atualizacoes

module.exports = Todo