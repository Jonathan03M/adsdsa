const mongoose = require('mongoose')

const dbConexion = async () => {
    try {
        await mongoose.connect('mongodb+srv://Servidor:formosa2021@ipf2022.co4jpdm.mongodb.net/modelos?retryWrites=true&w=majority')
        console.log('Conectado')
    } catch (error) {
        console.log('No se pudo conectar a la base de datos', error)
    }}


    module.exports = dbConexion