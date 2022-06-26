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
// Union Types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);
// nota = true
// Checando tipos - em typeScript a checagem é em Runtime
let valor = 30;
// valor = true 
if (typeof valor === 'number') {
    console.log('É um number!');
}
else {
    console.log(typeof valor);
}
// Never - função que nunca vai retornar ou encerrar.
// finaliza com tratativas de erros
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Bola',
    preco: 20,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome!');
        }
        if (this.preco <= 0) {
            falha('Preço inválido!');
        }
    }
};
produto.validarProduto();
// Valores opcionais com tipo "null"
let altura = 15;
// altura = null
let alturaOpcional = 15;
alturaOpcional = null;
const contato1 = {
    nome: 'Will',
    tel1: '123456789',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
let podeSerNulo = null;
// ao atribuir vaor "null" a uma variável ela assume o valor "any"
podeSerNulo = 16;
console.log(podeSerNulo);
podeSerNulo = 'Teste';
console.log(podeSerNulo);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    name: 'William',
    contaBancaria: contaBancaria,
    contatos: ['12345679', '987654321']
};
correntista.contaBancaria.depositar(2000);
console.log(correntista);
