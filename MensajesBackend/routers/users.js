const express = require('express')
const router = express.Router()
const controller = require('../controllers/users')
router.get('/', controller.getAll) // listar todos
router.post('/', controller.insert)//insert 
router.delete('/:id', controller.remove)//borrar
router.put('/:id', controller.update)//actualizar

module.exports = router