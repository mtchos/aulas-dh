// let a = [5, 6, 7];

// const fun = x => x ** 2;

// a = a.map(fun);

// console.log(a);

let pessoa = [
    {nome: 'Natália', idade: 21},
    {nome: 'Sérgio', idade: 40},
    {nome: 'Luiz Alexandre', idade: 25}
];

let maisQue22 = pessoa.filter(
    pessoa => {
        return pessoa.idade > 22
    }
);

console.log(maisQue22);