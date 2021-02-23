import React from 'react'

export default props => {

    const idade = () => parseInt(Math.random() * (20) + 20)
    const nerd = () => Math.random() > 0.5 

    return (
        <div>
            <strong>Filho</strong>
            <div>
                <button onClick = {
                        function (e){
                            props.botao('Emanuel', idade(), nerd())
                        }
                    }>
                    Fornecer informações console
                </button>
            </div>
        </div>
    )
}