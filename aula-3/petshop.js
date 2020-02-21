/* 
    AULA 1 - Digital House Brasil
    Arrays, Objetos Literais, Funções, 
    Loop for while do-while, Variáveis var let const
*/

const tituloDoPetshop = "\n::::: PETSHOP DO JURANDIR :::::\n";
console.log(tituloDoPetshop);

// Array armazena objetos com os dados dos animais

let pets = [{
    especie: "cachorro",
    nome: "Lubi",
    raca: "vira-lata",
    dataNascimento: "01/01/2016",
    peso: 4.2,
    sexo: "M",
    dono: {nome: "Matheus", idade: 31},
    vacinado: false,
    servicos: ["banho"]
},
{
    especie: "gato",
    nome: "Miau",
    raca: "siamês",
    dataNascimento: "03/07/2012",
    peso: 3.1,
    sexo: "F",
    dono: {nome: "Mértila", idade: 47},
    vacinado: true,
    servicos: ["banho", "unhas"]
}];

// JSON contendo um array com objetos de pets

let petshopJson = `[{"nome":"Repete Pet","raca":"Passsaro","dataNascimento":"10/12/2018","tipo":"Papagaio","peso":3.5,"sexo":"Macho","dono":{"nome":"vinicius","idade":25},"vacinado":false,"servicos":["Banho","Tosa"]},{"nome":"Menino","raca":"Vira-Lata","dataNascimento":"14/01/2016","tipo":"cachorro","sexo":"Fêmea","peso":3.5,"dono":{"nome":"João","idade":25},"vacinado":true,"servicos":["Banho","Tosa"]}] `

// Função listar nome, tipo e sexo


const listarPetsUm = function (array) {
    for (let i = 0; i < array.length; i++) {
            console.log("-".repeat(10))
            console.log("Nome: " + array[i].nome);
            console.log("Espécie: " + array[i].tipo);
            console.log(array[i].sexo === "M" ? "Sexo: macho" : "Sexo: fêmea");
    }
}

const listarPetsDois = function (array) {
    let counter = 0;
    while (counter<array.length) {
            console.log("-".repeat(10));
            console.log("Nome: " + array[counter].nome);
            console.log("Espécie: " + array[counter].especie);
            console.log(array[counter].sexo === "M" ? "Sexo: macho" : "Sexo: fêmea");
            counter++;
    }
}


// Função exibir se o pet foi vacinado, ou precisa ser vacinado

const vacinarPets = function (arrayIndex) {
    if (!arrayIndex.vacinado) {
        return "Animal já vacinado!";
    } else {
        return "Por favor vacine o animal!";
    }
    arrayIndex.vacinado == true;
}

// Função retirar nome e tipo do arquivo JSON

const exibirNomeTipo = json => {
    const arrayConvertida = JSON.parse(json);
    for(let  i = 0; i < arrayConvertida.length; i++) {
        console.log("\nANIMAL:")
        console.log("Nome: " + arrayConvertida[i].nome);
        console.log("Nome: " + arrayConvertida[i].tipo + "\n");
    }
    return arrayConvertida;
}

// Função usa dois callbacks para realizar processo de leitura e vacina nos pets, finaliza com uma mensagem

const darEntradaPets = (arrayJson, funcaoLeitura, funcaoVacinar) => {
    let arrayConvertida = exibirNomeTipo(arrayJson);
    const mensagemFinal = (pet, resultado) => {
        console.log("O pet " + pet.nome + resultado);
    }
    for(let i = 0; i < arrayConvertida.length; i++) {
        let resultado = vacinarPets(arrayConvertida[i]);
        console.log("Foi dada a entrada no pet " + arrayConvertida[i].nome + ". " + resultado)
    }
}

darEntradaPets(petshopJson, exibirNomeTipo, vacinarPets)

// JSON pets
