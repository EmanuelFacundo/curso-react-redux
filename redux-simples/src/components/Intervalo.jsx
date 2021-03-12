import './Intervalo.css'
import './Card.css'

import React from 'react'

import Card from './Card'
import { connect } from 'react-redux'
import { alterarNunMax, alterarNunMin } from '../store/actions/numeros'

function Intervalo(props) {

    const {max, min} = props
    
    return(
        <Card tittle="Intervalo" red>
            <span  className="Intervalo">
                <strong>Minimo</strong>
                <input type="number" value={min} onChange={e => props.setNumMin(+e.target.value)}/>
            </span>
            <span  className="Intervalo">
                <strong>Maximo</strong>
                <input type="number" value={max}  onChange={e => props.setNumMax(+e.target.value)}/>
            </span>
        </Card>
    )
}

function mapStateToProps(state) {
    return{
        max: state.numeros.max,
        min: state.numeros.min
    }
}

function mapDispatchToProps(dispatch){
    return{
        setNumMin(novoNumero){
            const action = alterarNunMin(novoNumero)
            dispatch(action)
        },

        setNumMax(novoNumero){
            const action = alterarNunMax(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)