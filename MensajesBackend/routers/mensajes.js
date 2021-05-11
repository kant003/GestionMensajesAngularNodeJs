const express = require('express')
const router = express.Router()
const controller = require('../controllers/mensajes')
const verificaToken = require('../middleware/verificaToken')
router.get('/', controller.getAll) // listar todos
router.get('/:id', controller.getById)// listar uno
router.post('/', controller.insert)//insert 
router.delete('/:id', verificaToken.verificaToken, controller.remove)//borrar
router.put('/:id', controller.update)//actualizar

module.exports = router