const jwt = require('jsonwebtoken')
function verificaToken(req, res, next){
    const token = req.header.token
    if(!token) return req.status(401).send('Error. No me has pasado el token.')
    try{
        jwt.verify(token, process.env.TOKEN_SECRETO)
    }catch(error){
        return req.status(401).send('Token no valido')
    }
    next()
}

module.exports = {verificaToken}