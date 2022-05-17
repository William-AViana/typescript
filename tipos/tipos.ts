// string
let nome: string = 'William'
console.log(nome)
// nome = 28

// numbers
let idade: number = 27
// idade = 'Ana'
idade = 27.5
console.log(idade)

//  boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

// tipos esplícitos
let minhaIdade: any
minhaIdade = 31
console.log(typeof minhaIdade)
minhaIdade = '31'
console.log(typeof minhaIdade)

// array
let hobbies: any[] = ['Cozinhar', 'Praticar Esportes']
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 400]
// hobbies = 100
console.log(hobbies)

// tuplas - array de tipos pré definidos
let endereco: [string, number, string] = ['Av Principal', 100, ''];
console.log(endereco)

endereco = ['Av dois', 125, 'apt 5']
console.log(endereco)

// enums - valores pré-definidos
enum Cor {
  Cinza, // 0
  Branco = 100, // 1
  Preto, // 2
  Verde, //3
  Azul = 100
}

let minhaCor: Cor = Cor.Branco
console.log(minhaCor) // 100
console.log(Cor.Preto) // 101
console.log(Cor.Azul) // 100

// any 
let carro: any = 'BMW'
console.log(carro)

carro = { carro: 'BMW', ano: 2022 }
console.log(carro)

// Funções
function retornaMeuNome(): string {
  // return idade
  return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
  console.log('Oi')
  // return minhaIdade
}

digaOi()

function multiplicar(numA: number, numB: number): number {
  return numA * numB
}

// console.log(multiplicar(2, 'Will'))
console.log(multiplicar(2, 2.5))

// tipo função
let calculo: (x: number, y: number) => number
// calculo = digaOi
// calculo() // 'Oi'
// calculo = {}

calculo = multiplicar
console.log(multiplicar(5, 5))

// objetos
let usuario: { nome: string, idade: number } = {
  nome: 'Will',
  idade: 31
}
console.log(usuario)

// usuario = {}

// não atribui a propriedades que não foi declarada com os tipos
// usuario = {
//   name: 'Grazi',
//   age: 45
// }

usuario = {
  idade: 45,
  nome: 'Grazi'
}

console.log(usuario)

// Desafio
/*
  Criar um objeto funcionário com:
    - Array de strings com os nomes dos supervisores
    - Função de bater o ponto que recebe a hora (número)
      e retorna uma string
      -> Ponto normal (<= 8)
      -> Fora do horário (> 8)
*/

let funcionario: {
  supervisores: string[],
  baterPonto: (horas: number) => string,
} = {
  supervisores: ['Will', 'Grazi', 'Keila', 'Samuel'],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return 'Ponto Normal'
    } else {
      return 'Fora do horário'
    }
  }
}
console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(10))