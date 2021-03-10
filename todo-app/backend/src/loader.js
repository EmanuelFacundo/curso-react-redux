/* loader.js carrega os principais arquivos de configuracao*/

const server = require('./config/server') 
require('./config/database') //referencia para o arquivo database
require('./config/routes')(server)