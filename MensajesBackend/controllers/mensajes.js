let Mensaje = require('../models/mensaje')

async function getAll(req, res){
    let mensajes = await Mensaje.find()
    try{
        res.status(200).json(mensajes)
    }catch(err){
        res.status(500).json('Error al obtener todos los mensajes')
    }
}

async function getById(req, res){
    let id = req.params.id
    let mensaje = await Mensaje.findById(id)
    try{
        res.status(200).json(mensaje)
    }catch(err){
        res.status(500).json('Error al obtener un mensaje')
    }
}

async function insert(req, res){
    const nuevoMensaje = new Mensaje(req.body)
    try{
        const mensajeGuardado = await nuevoMensaje.save()
        res.status(201).json(mensajeGuardado)
    }catch(err){
        res.status(500).json('Error al guardar el mensaje')
    }
}

async function remove(req, res){
    const id = req.params.id
    try{
        const mesajeBorrado = await Mensaje.findByIdAndDelete(id)
        res.status(204).json(mesajeBorrado)
    }catch(err){
        res.status(500).json('Error al borrar el mensaje')
    }

}

async function update(req, res){
    const id = req.params.id
    const datos = req.body
    try{
        const mensajeActualizado = await Mensaje.findByIdAndUpdate(id, datos, {new:true})
        res.status(200).json(mensajeActualizado)
    }catch{
        res.status(500).json('Error al actualizar el mensaje')
    }
}

module.exports = {getAll, getById, insert, remove, update}