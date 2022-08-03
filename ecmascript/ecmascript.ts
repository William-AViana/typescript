/* let e const
  "var" escopo de função e global
  "let" escopo de bloco e função
  "const" escopo de bloco e função
 */

let seraQueFoi = '?'
console.log(seraQueFoi)
// let seraQueFoi = '?' // not hoisting

let estaFrio = true
if (estaFrio) {
  let acao = 'Colocar casaco!'
  console.log(acao)
}
// console.log(acao)

const cpf: string = '123.456.789.10'
// cpf = '987.654.321-00'
console.log(cpf)

var segredo = 'externo'
function revelar() {
  var segredo = 'interno'
  console.log(segredo)
}

revelar()
console.log(segredo)

{
  {
    const def = 'def'
    console.log(def)
  }
}

// for (var i = 0; i < 10; i++) {
//   console.log(i)
// }
// console.log(i) // "i" continua visível fora do laço "for"

for (let i = 0; i < 10; i++) {
  console.log(i)
}
// console.log(i)

/* mudando as configurações do TS "target" para "eS2015"
   a variável "ação" é visível fora do escopo mesmo sendo
   "let" e a const "cpf" é possível atribuir outros valores
   o compilador vai alertar sobre o código não estar correto.
*/

// Arrow Function
const somar = function (n1: number, n2: number): number {
  return n1 + n2
}
console.log(somar(5, 5))

const subtrair = (n1: number, n2: number): number => n1 - n2
console.log(subtrair(3, 5))

const saudacao = () => console.log('Saudação!')
saudacao()

const falarCom = (pessoa: string) => console.log('Olá ' + pessoa)
falarCom('João')

// this pode variar de acordo com a chamada
// function normalComThis() {
//   console.log(this)
// }
// normalComThis()
// // vai variar o this de acordo com a chamada
// const normlaComThisEspecial = normalComThis
//   .bind({ name: 'William' })
// normlaComThisEspecial()

// // this??? - com arrow nunca vai haver variações da chamada
// console.log(this)
// const arrowComThis = () => console.log(this)

// const arrowComThisEspecial = arrowComThis
//   .bind({ nome: 'Grazi' })
// arrowComThisEspecial()

// Parâmetro padrão
function contagemRegressiva(inicio: number = 5,
  fim: number = inicio - 5): void {
  console.log(inicio)
  while (inicio > fim) {
    inicio--
    console.log(inicio)
  }
  console.log('Fim!')
}
contagemRegressiva()
contagemRegressiva(3)

// Rest & Spread
const numbers = [1, 10, 99, -5, 200, 1034]
console.log(Math.max(...numbers)) // Spread "espalhar"

const turmaA: string[] = ['William', 'Grazi', 'Ke', 'Samuka']
const turmaB: string[] =
  ['Roberto', 'Nanci', ...turmaA, 'Meire', 'Mario']

console.log(turmaB)

// Rest & Spread
function retornarArray(...args: number[]): number[] {
  return args // Rest "agrupar"
}

const numeros = retornarArray(1, 2, 4, 5, 6, 7, 8)
console.log(numeros)

// Rest & Spread (tupla)
const tupla: [number, string, boolean] = [1, 'Teste', false]

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]): void {
  console.log(Array.isArray(params))
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla)

// Destructuring (array)
const caracteriticas = ['Motor Zetec 1.8', 2020]
// const motor = caracteriticas[0]
// const ano = caracteriticas[1]

const [motor, ano] = caracteriticas
console.log(motor)
console.log(ano)

// Destructuring (objeto)
const item = {
  nome: 'SSD 480GB',
  preco: 250,
  caracteristicas: {
    importado: true
  }
}

const nomeItem = item.nome
const precoItem = item.preco
console.log(nomeItem)
console.log(precoItem)

// Destructuring com label
const { nome: n, preco: p, caracteristicas: { importado } } = item
console.log(n)
console.log(p)
console.log(importado)

// Template String
const usuarioId: string = 'Suporte William'
const notificacoes: string = '19'
// const boasVindas = 'Boas vindas ' + usuarioId +
//   ' Notificações ' + notificacoes

const boasVindas = `
  Boas vindas ${usuarioId}
  Notificações: ${parseInt(notificacoes) > 9 ?
    '+9' : notificacoes}
`
console.log(boasVindas)

// Desafios
// Exercicio 1
const dobro = (valor1: number): number => valor1 * 2
console.log('Dobro ' + dobro(10))

// Exercicio 2
const dizerOla = function (nome: string = 'Pessoa'): void {
  console.log('Olá, ' + nome)
}

dizerOla()
dizerOla('Anna')

// Exercicio 3
const nums: number[] = [-3, 33, 38, 5]
// Imprimir o menor valor
console.log(Math.min(...nums))

// Exercicio 4
const array = [55, 20]
// Adicionar todos os elementos de "nums" em array
array.push(...nums)
console.log(array)

// Exercicio 5
const notas = [8.5, 6.3, 9.4]
const [nota1, nota2, nota3] = notas
console.log(nota1, nota2, nota3)

// Exercicio 6
const cientista = { primeiroNome: 'Will', expeciencia: 12 }
const { primeiroNome, expeciencia } = cientista
console.log(primeiroNome, expeciencia)

// Callback
function esperar3s(callback: (dado: string) => void) {
  setTimeout(() => {
    callback('3s depois...')
  }, 3000)
}

esperar3s(function (resultado: string) {
  console.log(resultado)
})

// Promise
function esperar3sPromise() {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve('4s depois promise...')
    }, 4000)
  })
}

esperar3sPromise()
  .then(dado => console.log(dado));

fetch('https://swapi.dev/api/peope/1')
  .then(res => res.json())
  .then(personagem => personagem.films)
  .then(films => fetch(films[1]))
  .then(resFilms => resFilms.json())
  .then(filme => console.log(filme.title))
  .catch(err => console.error(err))