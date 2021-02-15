import React from 'react'

export default props => {

    const { min, max} = props

    const random = parseInt(Math.random() * (max - min) - min)

    return (
        <div>
            <h2>Números</h2>
            <p>Maior = { max }</p>
            <p>Menor = { min }</p>
            <p>Número Aleatorio entre o maior e o menor = { random }</p>
        </div>
    )
}