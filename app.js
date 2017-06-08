import express  from 'express'
import { join } from 'path'
import logger from 'morgan'
import path from 'path'
import bodyParser from 'body-parser'

const app = express()
const buildFile = path.resolve(__dirname, 'build', 'index.html')

app.use(logger('dev'));

app.use(express.static(__dirname + '/build'))
app.use(bodyParser.json()) //Para peticiones application/json Nos ayuda a leer parametros que vienen en una peticion json
app.use(bodyParser.urlencoded({extended: true})) // Exteded: define con que algoritmo va a hacer parsing la libreria >>>> false no se puede hacer parsing de arreglos que no son json o que sean objetos.


//This middleware posibilita que cualquiera pueda enviar ddatos a nuestra aplicaicon, lo cual solo se utilizar por razones de development
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// // app.use('/static', express.static(join(__dirname, '/build')))
//
// app.get('*', function(req, res){
//   res.sendFile(buildFile)
//   console.log('te conectaste al backend');
// })

app.post('/login', function(req,res) {
  console.log('password: ' + req.body.password);
  console.log('email: '+ req.body.email);
  res.send('USER: we receive your info');
})

export default app






//Good Practices
// Cuando se hace un proyecto como una SPA con React se tieene que trabajar tanto front y back como dos elementos que no se combinan para nada, la unica conexion que se tienen entre ambos enviroments es que hacen intercambios de datos, solamente, incluso la mayor parte de las funcionalidades que se realiza se realiza en el front con react, como por ejemplovalidacion, rutas y pintado de componentes.
// Por lo que se Requiere de una construccion de una API para toda la interaccion entre el servidor y el usuario


// HERRAMIENTAS
//Postman
//Axios
//CORS on ExpressJS
//HTML DOM METHODS
