import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

function Sorteio(props) {

    const {max, min} = props
    const aleatorio = parseInt(Math.random() * (max - min)) + min

    return(
        <Card tittle="Sorteio dos numeros" purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return{
        max: state.numeros.max,
        min: state.numeros.min
    }
}

export default connect(mapStateToProps)(Sorteio)