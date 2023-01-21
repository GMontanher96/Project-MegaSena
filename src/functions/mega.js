export function mega(quantidade = 6, numeros = []){
    let qtde = +quantidade
    if(qtde < 6 && qtde > 60) {
        throw "Quantidade inválida"
    }

    if(numeros.length === qtde){
        return numeros.sort((n1, n2) => n1 - n2)
    }

    const randomNumber = parseInt(Math.random() * 60) + 1
    if(!numeros.includes(randomNumber)) {
        return mega(qtde, [...numeros, randomNumber])
    } else {
        return mega(qtde, numeros)
    }
}

