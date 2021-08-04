let nota = 7.3
let situacao
/*
if(nota >= 6){
    situacao = "Aprovado"
}
else {
    situacao = "Reprovado"
}
*/

// Usando o operador ternario
// primeiro existe uma condição depois vem a ? depois o resultado verdadeiro : falso

situacao = nota >= 6 ? "Aprovado" : "Reprovado"
console.log(`Nota ${nota}, situação: ${situacao}`)

let user = "admin"

let msg = user === "admin" ? "Pode logar" : "Não pode logar"

console.log(msg)