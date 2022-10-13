const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()

const app = express()

const initDB = require('./db/conexion')
initDB()

port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use(require('./routes/task.routes'))
app.use(require('./routes/auth.routes'))

app.listen (port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`)
})