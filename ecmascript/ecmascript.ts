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