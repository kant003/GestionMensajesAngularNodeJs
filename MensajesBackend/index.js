const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')
const routerMensajes = require('./routers/mensajes')
const routerUsers = require('./routers/users')
dotenv.config();

let app = express();
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/mensaje', routerMensajes)
app.use('/user', routerUsers)

const run = async() =>{
    const config = {
        useFindAndModify: true, 
        useNewUrlParser: true, 
        useUnifiedTopology:true
    }
    await mongoose.connect(process.env.URL_BASEDATOS, config)
    await app.listen(process.env.PUERTO_SERVIDOR)
    console.log('servidor y base de datos encendidos')
}
run().catch(err=> console.log('Fallo al arrancar:',err))