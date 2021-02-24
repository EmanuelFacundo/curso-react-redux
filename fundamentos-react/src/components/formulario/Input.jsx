import React,{ useState } from 'react'

export default props => {

    const [valor, setValor] = useState('Inicial')

    function escreveu(e){
        setValor(e.target.value)
    }

    return (
        <div>
            <h2>{valor}</h2>
            <div style = {{display: 'flex',
             flexDirection: 'column'}}>
                <input value = {valor} onChange = {escreveu}/>
                <input value = {valor} readOnly />
                <input value = {undefined}/>
            </div>
        </div>
    )
}