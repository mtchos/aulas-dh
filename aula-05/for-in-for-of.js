// for...in
let pessoa = {
    nome: "Natália Lira",
    idade: 21,
    endereco: "Rua das Flores, 2020"
};

for (const campo in pessoa) {
    console.log(`${campo}: ${pessoa[campo]}`)
}

// for...of
let array = ["Mayara", "Pedro", "Dario", "Laura"]
for (const nome of array) {
    console.log(nome);
};