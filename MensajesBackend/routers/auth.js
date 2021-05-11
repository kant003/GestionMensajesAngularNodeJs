
const express = require('express')
const router = express.Router()
const controller = require('../controllers/auth')
router.post('/login', controller.login)//logueo 
router.post('/singup', controller.singup)//registro

module.exports = router