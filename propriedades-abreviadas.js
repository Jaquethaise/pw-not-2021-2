// criando um objeto

let infoUsuario = {
    nome: "Jaqueline",
    nomeCompleto:"Jaqueline Thaise Silva",
    grupo: "alunos",
    senha: "1234"
}

// ou

    let usuario = "Jaqueline"
    let nome = "Jaqueline Thaise Silva"
    let grupo = "alunos"
    let password = "1234"


   let infoUsuario = {
        usuario = usuario,
        nomeCompleto = nome,
        grupo = grupo,
        senha = password,
    }

    // Abreviando propriedades

    let infoUsuario = {
        usuario,
        nomeCompleto = nome,
        grupo,
        senha = password,
    }

console.log(infoUsuario)

// Exibindo o conteudo da variavel password para fins de depuração
console.log({password})
console.log({grupo})
console.log({password, grupo})