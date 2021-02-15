import React from 'react'

export default (props) => {

    const status = props.nota >=7 ? 'Aprovado' : 'Reprovado'

    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>{ props.subtitulo } tem nota { props.nota } e está <strong>{ status }</strong>!</p>

        </div>
    )
}