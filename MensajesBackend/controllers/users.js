let User = require('../models/user')

async function getAll(req, res){
    let usuarios = await User.find()
    try{
        res.status(200).json(usuarios)
    }catch(err){
        res.status(500).json('Error al obtener todos los usuarios')
    }
}

async function getById(req, res){
    let id = req.params.id
    let user = await User.findById(id)
    try{
        res.status(200).json(user)
    }catch(err){
        res.status(500).json('Error al obtener un usuario')
    }
}

async function insert(req, res){
    const nuevoUsuario = new User(req.body)
    try{
        const usuarioGuardado = await nuevoUsuario.save()
        res.status(201).json(usuarioGuardado)
    }catch(err){
        res.status(500).json('Error al guardar el usuario')
    }
}

async function remove(req, res){
    const id = req.params.id
    try{
        const usuarioBorrado = await User.findByIdAndDelete(id)
        res.status(204).json(usuarioBorrado)
    }catch(err){
        res.status(500).json('Error al borrar el usuario')
    }

}

async function update(req, res){
    const id = req.params.id
    const datos = req.body
    try{
        const usuarioActualizado = await User.findByIdAndUpdate(id, datos, {new:true})
        res.status(200).json(usuarioActualizado)
    }catch{
        res.status(500).json('Error al actualizar el usuario')
    }
}

module.exports = {getAll, getById, insert, remove, update}