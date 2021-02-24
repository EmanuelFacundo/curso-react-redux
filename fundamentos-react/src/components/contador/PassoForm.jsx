import React from 'react'

export default props => {

    return (
        <div>
            <label htmlFor="inputPasso">Passo: </label>
            <input id = "inputPasso" type="number" value = {props.passoInc} onChange = {e => props.setPasso(+e.target.value)}/>
        </div>
    )
}