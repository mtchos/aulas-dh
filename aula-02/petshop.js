// NOME, IDADE, RAÇA, DONO, VACINADO, SERVIÇOS

// var nomeCachorro = "Bob";
// var raca = "Vira-lata";


// var nome = "Bilu";
// var idade = 7;
// var raca = undefined;
// var peso = 8.3;
// var dono = {
//     nome: "Josias",
//     idade: 43,
//     cpf: "000.000.000-00"
// };
// var vacinado = true;
// var servicos = ["banho", "tosa"];
const tituloDoPetshop = "\n::::: PETSHOP DO JURANDIR :::::\n";
console.log(tituloDoPetshop);

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

// console.log(pets[0]);


const listarPetsUm = function (array) {
    for (let i = 0; i < array.length; i++) {
            console.log("-".repeat(10))
            console.log("Nome: " + array[i].nome);
            console.log("Espécie: " + array[i].especie);
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


// LISTAR_PETS(pets);

const vacinarPets = function (arrayIndex) {
    console.log(arrayIndex.vacinado == true ? 
        "Animal já vacinado!" : 
        "Animal ainda não vacinado!");
        arrayIndex.vacinado = true;
}

vacinarPets(pets[0]);

vacinarPets(pets[1]);

console.log(pets[0].vacinado);