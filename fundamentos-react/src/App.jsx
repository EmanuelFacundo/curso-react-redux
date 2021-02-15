import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

export default _ => (
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
            titulo = 'Alunos'
            subtitulo = 'Pedro Silva'
            nota = {7}
            />
        <Fragmento />
        <Aleatorio
            min = {1}
            max = {100}
        />

    </div>
)