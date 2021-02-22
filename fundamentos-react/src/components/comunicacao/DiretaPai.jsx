import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return(
        <div>
            <DiretaFilho nome = "Emanuel" idade = {21} nerd = {true}/>
            <DiretaFilho nome = "Soraya" idade = {25} nerd = {false}/>
        </div>
    )
}