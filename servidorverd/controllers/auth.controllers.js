const User = require('../models/user')
const jwt = require('jsonwebtoken')

authCtrl = {}


authCtrl.registro = async (req, res) => {
        const {usuario, contraseña, email, roles} = req.body

        
        const Usuario = new User ({
            usuario, contraseña, email, roles
        })
        const usuarioo = await Usuario.save()

        const token = jwt.sign({id: usuarioo._id}, '', process.env.SECRET,{
            expiresIn: 86400
        })

        res.status(200).json({token})
    }

authCtrl.login = async (req, res) => {
    res.json('login')
}    

module.exports = authCtrl