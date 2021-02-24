function gerarNumerosNaoContidos(min, max, array){
    const aleatorio = parseInt(Math.random() * (max-min) + min)
    return array.includes(aleatorio) ? 
        gerarNumerosNaoContidos(min, max, array) : aleatorio
}

function gerarNumeros(qtde){

    const numeros = Array(qtde)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNumerosNaoContidos(0, 61, nums)
            return [ ...nums, novoNumero]
        }, [])
        .sort((n1,n2) => n1 - n2)

    return numeros
}

console.log(gerarNumeros(7))







// function gerarNumeros(qtde) {
//     var numerosMega = []

//     for (let i = 1; i < (61); i++) {
//         numerosMega.push(i);
        
//     }

//     var aleatorioMega = []

//     for (let i = 1; i < (qtde+1); i++){
//         const random = parseInt(Math.random() * (60-i) + i)
//         aleatorioMega.push(numerosMega[random]) ;
//     }

//     return  aleatorioMega
// }
