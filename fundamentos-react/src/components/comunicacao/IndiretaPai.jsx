import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {

    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function clicou(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)      
    }

    return (
        <div>
            <span>{nome} </span>
            <strong>{idade}</strong>
            <span> {nerd  ? 'Sim' : 'Nao'}</span>
            <IndiretaFilho botao = {clicou}/>
        </div>
    )
}