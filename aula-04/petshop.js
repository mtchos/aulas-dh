json = `[{
"nome":"Repete",
"raca":"Passaro",
"dataNascimento":"2018-10-12T10:27:00Z",
"tipo":"Papagaio",
"peso":3.5,"sexo":"Macho",
"dono":{"nome":"vinicius","idade":25},
"vacinado":false,
"castrado":true,
"servicos":["Banho","Tosa"]},

{"nome":"Menina",
"raca":"Vira-Lata",
"dataNascimento":"2016-01-14T16:30:22Z",
"tipo":"cachorro",
"sexo":"Fêmea",
"peso":3.5,
"dono":{"nome":"João","idade":25},
"vacinado":true,
"castrado":false,
"servicos":["Banho","Tosa", "Castração"]}] `;

// Padrão de Date string no JSON: YYYY-MM-DDTHH:mm:ss.msmsmstz
// year-month-day-t-hour-minute-second-milissecond-timezone (ms are optional)

const lerPets = varJson => {
    let pets = JSON.parse(varJson);
    pets.map((pet) => pet.dataNascimento = new Date(pet.dataNascimento));
    return pets;
}

// lerPets(json);

let pets = lerPets(json);
// console.log(pets);
// process.exit();

// Marcar pet como vacinado e adicionar uma string "vacinado" ao array de serviços

const vacinarPet = function(pet){
    if(!pet.vacinado){
        pet.vacinado = true;
        pet.servicos.push("Vacina");
        return ". O Pet foi vacinado com sucesso!";
    }else {
        pet.servicos.push("Vacina");
        return ". Esse pet já está vacinado!";
    }
}

const darEntradaPets = (listaPets, leituraLista, vacinarPet)=>{   
    let pets =  leituraLista(listaPets)
    // console.log(pets)
    const msgFinal = (pet , resultado) =>{
        console.log("O pet: "+ pet.nome + resultado)
    }    
    for (let i = 0; i < pets.length; i++) {
       let resultado = vacinarPet(pets[i]);
       msgFinal(pets[i], resultado)
    }
    console.log(pets);
}

// Busca por animais com o nome igual ao 1o parametro

const buscaPeloNome = (trecho, array) => {
    let resultado = [];
    for (const element of array) {
        if (element.nome.indexOf(trecho) != -1) {
            resultado.push(element.nome);
        }
    }
    return resultado;
}
// Verifica se o pet foi castrado

const castrarPet = pet => {
    pet.castrado ? "Erro, pet já castrado" : pet.castrado = true, pet.servicos.push("Castrado")
};

// Dá banho no pet

const darBanho = pet => {
    return pet.servicos.push("Banho"), console.log("Banho dado no pet " + pet.nome);
}

// Usar os dois callback para realizar os processos de leitura e vacina nos pets
//criar uma função para dar mensagem de finalização do serviço dentro da função principal