const { Router } = require('express')
const { visualizar } = require('./controladores/recurso')
const rotas = Router()

rotas.get('', visualizar )

module.exports = rotas