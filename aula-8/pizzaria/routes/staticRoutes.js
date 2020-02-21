const express = require('express')
const StaticController = require('../controllers/StaticController')

const router = express.Router()

router.get('/', StaticController.home)

router.get('/sobre', StaticController.about)

module.exports = router