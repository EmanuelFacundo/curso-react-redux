import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'


function Soma(props) {

    const {max, min} = props

    return(
        <Card tittle="Soma dos numeros" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{max + min}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        max: state.numeros.max,
        min: state.numeros.min
    }
}

export default connect(mapStateToProps)(Soma)