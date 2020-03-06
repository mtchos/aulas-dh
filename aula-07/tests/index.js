const http = require('http')
const url = require('url')

const petshop = require('./petshop.js')

http.createServer((req, res) => {
    console.log('Request do usuario...')

    let urlCompleta = url.parse(req.url, true)
    let rota = urlCompleta.pathname
    let dados = urlCompleta.query

    let conteudo = ''
    
    switch(rota) {
        case '/':
            res.write('Paginaaa inicial\n')
            break
        case '/contato':
            res.write('Pagina de contato')
            break
        case '/lista-de-pets':
            conteudo = petshop.listarPets()
            res.write(conteudo)
            break
        case '/cadastrar-pet':
            petshop.addPet(dados.nomePet)
            conteudo = petshop.listarPets()
            res.write(conteudo)
    }
    res.end()

}).listen(3030)