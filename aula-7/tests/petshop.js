let listaDePets = ['bob', 'dino']

function listarPets() {
    let conteudo = ''
    listaDePets.forEach((pet, index) => {
        conteudo += `
        ------------------
        Nome do pet: ${pet}`
    })
    return conteudo
}

function addPet(nomePet) {
    listaDePets.push(nomePet)
    return 'Pet cadastrado'
}

module.exports = {listarPets, addPet}