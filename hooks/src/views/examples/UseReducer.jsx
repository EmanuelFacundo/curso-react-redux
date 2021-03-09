import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    user: null,
    number: 0,
}

function reducer(state, action){
    switch(action.type){
        case 'numberAdd2':
            return {...state, number: state.number + 2}

        case 'numberMult7':
            return {...state, number: state.number * 7}
        
        case 'numberDiv25':
            return {...state, number: state.number / 25}

        case 'numberAdd':
            return {...state, number: state.number + action.payload}

        case 'numberInt':
            return {...state, number: parseInt(state.number)}

        case 'login':
            return {...state, user: {name: action.payload} }
        
        default:
            return state
    }
}

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [number, setNumber] = useState(0)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            
            <div className="center">
                
                {state.user ? <span className="text">Bem vindo(a) {state.user.name}</span>
                            : <span className="text">Sem usuario</span> }

                <span className="text">{state.number}</span>
                <div>
                    <input type="number" className="input" value={number} onChange={(e) => setNumber(e.target.value)}/>
                    <button className="btn" onClick={() => dispatch({type: 'numberAdd', payload: parseInt(number) })}>Adicionar</button>
                </div>
                <div>
                    <button className="btn" onClick={() => dispatch({type: 'login', payload:'Emanuel'})}>Login</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberAdd2'})}>+ 2</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberMult7'})}>x 7</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberDiv25'})}>/ 25</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberInt'})}>Inteiro</button>
                </div>

            </div>
        </div>
    )
}

export default UseReducer
