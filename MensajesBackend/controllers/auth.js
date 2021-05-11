let User = require('../models/user')
let jwt = require('jsonwebtoken')// npm install jsonwebtoken
let bcrypt = require('bcrypt')


function generarToken(usuarioEncontrado){
    let infoToken = {
        sub: usuarioEncontrado._id,
        name: usuarioEncontrado.nombre,
        exp: Math.floor( Date.now()/1000 + (60*60*24) ), // 24 horas
        iat: Date.now(),
        elEmail: usuarioEncontrado.email
    }
    const token = jwt.sign(infoToken, process.env.TOKEN_SECRETO)
    return token
}

async function login(req, res){
    try{
        const email = req.body.email // viene en el formulario
        const usuarioEncontrado = await User.findOne(  {email: email} )
        if(!usuarioEncontrado) {
            return res.status(401).json('Error en usuario o password 1')
        }
        const passwordValido = await bcrypt.compare(req.body.password, usuarioEncontrado.password)
        if(!passwordValido) {
            return res.status(401).json('Error en usuario o password 2')
        }
        const token = generarToken(usuarioEncontrado)
        res.status(200).json(token)
    }catch(error){
        return res.status(500).json('Error:'+error)
    }
}

async function singup(req, res){ // registro
    try{
        const user = new User(req.body)
        const saltRounds = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(req.body.password, saltRounds)
        const nuevoUsuario = await user.save()
        const token = generarToken(nuevoUsuario)
        res.status(201).json(token)
    }catch(error){
        return res.status(500).json('Error:'+error)
    }
}

module.exports ={ login, singup }