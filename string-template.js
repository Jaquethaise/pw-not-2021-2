let nome = "Jaqueline"
let idade = 30
let cidade = "Franca/SP"

console.log("Meu nome é " +nome + ", tenho " + idade + " anos e moro em " + cidade + ".")

// Usando string template, ele só funciona quando delimitado por ``
console.log(`Meu nome é ${nome} tenho ${idade} anos e moro em ${cidade}.`)

console.log(`Daqui a cinco anos, ${nome.toUpperCase()} terá ${idade + 5} anos.`)