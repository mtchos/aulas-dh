let a = [1, 2, 3, 4, 5];

// a.map()
let b = a.map(x => x * 2);
console.log(b);

// a.filter()
let c = a.filter(x => x > 3);
console.log(c);

// filter com map
let d = a.map(x => x ** 2).filter(y => y > 3);
console.log(d);

// forEach
a.forEach(x => console.log(`Imprimindo o número... ${x}`));

let cidades = [{
    nome: "São Paulo",
    pop: 12180000
},{
    nome: "Salvador",
    pop: 3000000
},{
    nome: "Campinas",
    pop: 1000000
},{
    nome: "Guaxupé",
    pop: 60000
}];

// Calculando a soma das populaçõe
let e = cidades.reduce((acumulado, cidade) => {
    return acumulado + cidade.pop;
}, 0);

console.log(e);

// Somando com spread operator
const somaVarios = (...x) => {
    return x.reduce((acum, atual) => acum + atual);
};

console.log(somaVarios(1, 2, 3, 5));