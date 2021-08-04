// criando um vetor

let carros = ["Celta", "Gol", "Uno"]

// desestruturação total do vetor

let [a, b, c] = carros

console.log(a)
console.log(b)
console.log(c)

// desestruturação parcial

let [m, n] = carros

console.log( "-------------------")
console.log(m)
console.log(n)

// pegando o primeiro e o ultimo

let [x, , z] = carros
console.log("---------------------")
console.log(x)
console.log(z)  

//pegando o segundo e o terceiro

let [, i, j] = carros
console.log("---------------------")
console.log(i)
console.log(j)

// desestruturação em objetos
let veiculo = {
    marca: "Volkswagen",
    modelo: "Fusca",
    cor: "preto",
    ano: 1969
}

// desestruturação total de um objeto
// 1ª regra: as variaveis devem ter o mesmo nome das propriedades
// 2ª regra: a ordem não importa

let {cor, modelo, ano, marca} = veiculo

console.log("---------------------")
console.log(marca)
console.log(modelo)
console.log(cor)
console.log(ano)

// para fazer a desestruturação parcial, é somente passar no let uma variavel apenas ou quais a que você quer exibir
