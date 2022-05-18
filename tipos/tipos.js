"use strict";
// string
let nome = 'William';
console.log(nome);
// nome = 28
// numbers
let idade = 27;
// idade = 'Ana'
idade = 27.5;
console.log(idade);
//  boolean
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// tipos esplícitos
let minhaIdade;
minhaIdade = 31;
console.log(typeof minhaIdade);
minhaIdade = '31';
console.log(typeof minhaIdade);
// array
let hobbies = ['Cozinhar', 'Praticar Esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 400];
// hobbies = 100
console.log(hobbies);
// tuplas - array de tipos pré definidos
let endereco = ['Av Principal', 100, ''];
console.log(endereco);
endereco = ['Av dois', 125, 'apt 5'];
console.log(endereco);
// enums - valores pré-definidos
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Branco"] = 100] = "Branco";
    Cor[Cor["Preto"] = 101] = "Preto";
    Cor[Cor["Verde"] = 102] = "Verde";
    Cor[Cor["Azul"] = 100] = "Azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.Branco;
console.log(minhaCor); // 100
console.log(Cor.Preto); // 101
console.log(Cor.Azul); // 100
// any 
let carro = 'BMW';
console.log(carro);
carro = { carro: 'BMW', ano: 2022 };
console.log(carro);
// Funções
function retornaMeuNome() {
    // return idade
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
    // return minhaIdade
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
// console.log(multiplicar(2, 'Will'))
console.log(multiplicar(2, 2.5));
// tipo função
let calculo;
// calculo = digaOi
// calculo() // 'Oi'
// calculo = {}
calculo = multiplicar;
console.log(multiplicar(5, 5));
// objetos
let usuario = {
    nome: 'Will',
    idade: 31
};
console.log(usuario);
// usuario = {}
// não atribui a propriedades que não foi declarada com os tipos
// usuario = {
//   name: 'Grazi',
//   age: 45
// }
usuario = {
    idade: 45,
    nome: 'Grazi'
};
console.log(usuario);
let funcionario = {
    supervisores: ['Will', 'Grazi', 'Keila', 'Samuel'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do horário!';
        }
    }
};
let funcionario2 = {
    supervisores: ['Will', 'Grazi'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do horário!';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(10));
