function partidasRank(vitorias, derrotas){
    let nomeHeroi = ("Cogumelo")
    let saldoVitorias = vitorias - derrotas
    let nivel

    if (saldoVitorias < 10){
        nivel = "Ferro"
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20){
        nivel = "Bronze"
    } else if (saldoVitorias >= 21 && saldoVitorias <= 30){
        nivel = "Prata"
    } else if (saldoVitorias >= 31 && saldoVitorias <=40){
        nivel = "Ouro"
    } else if (saldoVitorias >= 41 && saldoVitorias <= 50){
        nivel = "Platina"
    } else if (saldoVitorias >= 51 && saldoVitorias <= 60){
        nivel = "Esmeralda"
    } else if (saldoVitorias >= 61 && saldoVitorias <= 70){
        nivel = "Diamante"
    } else if (saldoVitorias >= 71 && saldoVitorias <= 100){
        nivel = "Lendario"
    } else if (saldoVitorias >= 101){
        nivel = "Imortal"
    }
    return `O ${nomeHeroi} tem um saldo de ${saldoVitorias} está no nível de ${nivel}!`
}

let vitorias = 143
let derrotas = 20
const resultado = partidasRank(vitorias, derrotas)
console.log(resultado)