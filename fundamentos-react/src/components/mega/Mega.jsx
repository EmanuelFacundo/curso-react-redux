import React,{useState} from 'react'
import Display from './Display'
import './Mega.css'

export default props => {

    const [numeros, setNumeros] = useState(0)

    function num(e){
        setNumeros(e.target.value)
    }

    return (
        <div className = "Mega">
            <h2>Mega Sena</h2>
            <Display qtde = {numeros}/>
            

        </div>
    )
}
