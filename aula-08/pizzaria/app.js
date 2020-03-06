// Installed modules
const express = require('express')
const app = express()

// Creative modules
const staticRouter = require('./routes/staticRoutes')
const pizzasRouter = require('./routes/pizzasRoutes')

// Routes
app.use('/', staticRouter)
app.use('/cardapio/pizzas', pizzasRouter)

app.listen(3000, () => console.log('Server running on port :3000'));
