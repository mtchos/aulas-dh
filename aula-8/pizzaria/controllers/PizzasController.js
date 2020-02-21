const pizzas = require('../database/pizzas')

const menu = (req, res) => {
    res.send(pizzas)
}

const search = (req, res) => {
    let {searchTerm} = req.params
    res.send(pizzas.filter(pizza => {
        return pizza.nome.includes(searchTerm)
    }))
}

module.exports = {menu, search}