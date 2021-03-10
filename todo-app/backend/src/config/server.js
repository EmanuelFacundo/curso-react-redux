/* serve.js responsavel pelas as configuracoes de start do servido e apartir 
dele da start nos web servers */

const port = 3003 // porta

const bodyParser = require('body-parser') //Faz o parse do corpo da requisicao 
const express = require('express') //servidor web
const server = express()    //start do express
const allowCors = require('./cors')

//midway
/* Sempre que chegar uma requisicao do padrao "urlencoded" quem faz o o parser eh o
bodyParser. extended: true para suportar mais tipos de dados que o padrao  */
server.use(bodyParser.urlencoded({ extended: true})) 
server.use(bodyParser.json())
server.use(allowCors)

//regristar a porta que foi declarada
server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server