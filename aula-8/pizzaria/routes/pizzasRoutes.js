const express = require('express')
const PizzasController = require('../controllers/PizzasController')

const router = express.Router()

router.get('/', PizzasController.menu)
router.get('/busca/:searchTerm', PizzasController.search)

module.exports = router