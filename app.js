// express eh o framework http
var express    = require('express');
// helper para lidar com paths e diretorios
var path       = require('path');
// morgan eh um request logger para express, um middleware
// express oferece o recurso de middlewares, sao funcoes que podemos inserir e manipular o request e o response
// morgan intercepta nossos requests e responses e printa no console do node os logs
var logger     = require('morgan');
// um middleware do proprio express para processar o body de requsicoes como POST e PUT
// acrescenta a propriedade ".body" no request (req.body) que contem o body do request
// nao sei por que isso ja nao vem nativo, mas tudo bem
// Voce precisa desse cara caso queira os dados do form acessiveis de forma simples
var bodyParser = require('body-parser');
// ORM para MongoDb
const mongoose = require('mongoose');

// Require routes
const index = require('./routes/index');
const users = require('./routes/users');
const api = require('./routes/api/index');

// Setup an express app
var app = express();
// **************************

// Database connection here
//mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`);
mongoose.connect('mongodb://localhost/vuestore');

// ********************

// **************************

// CORS config will be here
app.all('/*', function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
      res.status(200).end();
    } else {
      next();
    }
  });
// ********************

// view engine setup
// path.join junta os pedacos de path, __dirname oferece o diretorio DESTE arquivo
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// "app.use" seta os middlewares do express - um middleware express tem acesso ao request e ao response, podendo usa-las 
// para qualquer coisa. O proprio express eh uma sequencia de chamadas de middlewares
/* Exemplo:
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next(); // passa o controle para a proxima funcao middleware da pilha
});
*/
app.use(logger('dev'));
// informamos que queremos o req.body em formato json, pode ser raw() por exemplo
// bodyparser era um componente nativo do express, nao sei por que foi removido
app.use(bodyParser.json());
// essa eh uma configuracao 
app.use(bodyParser.urlencoded({ extended: false }));// for parsing application/x-www-form-urlencoded
/*Podemos tambem registrar middlewares para URLs especificas, como fazemos aqui
nesse caso index eh um router*/
app.use('/', index);
app.use('/users', users);

// url da nossa API
app.use('/api/v1', api)

module.exports = app;
