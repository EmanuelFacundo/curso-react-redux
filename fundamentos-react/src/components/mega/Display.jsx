import React, {useState} from 'react'

export default props => {

    function gerarNumerosNaoContidos(min, max, array){
        const aleatorio = parseInt(Math.random() * (max-min) + min)
        return array.includes(aleatorio) ? 
            gerarNumerosNaoContidos(min, max, array) : aleatorio
    }
    
    function gerarNumeros(qtde){
    
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumerosNaoContidos(1, 60, nums)
                return [ ...nums, novoNumero]
            }, [])
            .sort((n1,n2) => n1 - n2)
    
        return numeros
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIni = Array(qtde).fill(0)
    const [numeros, setNumeros] = useState(numerosIni)



    return (
        <div>
            <span>{numeros.join(' ')}</span>
            <div>
                <strong>Qtde de números:</strong>
                <input type="number" value = {qtde} 
                    onChange = {e => setQtde(+e.target.value) }  />
                <div>
                    <button onClick = {_=> setNumeros(gerarNumeros(qtde))}><strong>GERAR</strong></button>
                </div>
            </div>

        </div>
    )
}