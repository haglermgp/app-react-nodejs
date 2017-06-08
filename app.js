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
app.use(bodyParser.urlencoded({extended: true})) // Extended: define con que algoritmo va a hacer parsing la libreria >>>> false no se puede hacer parsing de arreglos que no son json o que sean objetos.


// app.use('/static', express.static(join(__dirname, '/build')))

app.get('*', function(req, res){
  res.sendFile(buildFile)
  console.log('te conectaste al backend');
})

app.get('/login', function(req,res) {
  res.sendFile(buildFile)
  console.log('te conectaste al backend');
})

app.post('/', function(req,res) {
  console.log('password: ' + req.body.password);
  console.log('email: '+ req.body.email);
  res.send('USER: we receive your info');
})

export default app
