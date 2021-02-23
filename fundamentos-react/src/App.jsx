import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'


export default _ => (
    <div className = 'App'>

        <h1>Fundamentos React</h1>

        <div className = 'Cards'>

            <Card titulo = '#10 - Comunição Indireta' color = "#32CD32">
                <IndiretaPai />
            </Card>

            <Card titulo = '#9 - Comunição Direta' color = "#A0522D">
                <DiretaPai />
            </Card>
            
            <Card titulo = '#8 - Renderização Condicional' color = "#0000CD">
                <UsuarioInfo usuario = {{ nome: 'Emanuel' }}/>
                <UsuarioInfo usuario = {{ email: 'Emanuel' }}/>
            </Card>

            <Card titulo = '#7 - Desafio Tabela Produtos' color = "#F07818">
                <TabelaProdutos />
            </Card>

            <Card titulo = '#6 - Repetição' color = "#FF9ECF">
                <ListaAlunos />
            </Card>

            <Card titulo = '#5 - Componente com Filhos' color = "#030">
                <Familia sobrenome = "Pinto">

                    <FamiliaMembro nome = "Pedro" />
                    <FamiliaMembro nome = "Ana" />
                    <FamiliaMembro nome = "Gustavo" />
                    
                </Familia>
            </Card>

            <Card titulo = '#4 - Aleatorio' color = "#E8B71A">
                <Aleatorio
                    min = {1}
                    max = {100}
                />
            </Card>      
            
            <Card titulo = '#3 - Fragmento' color = "#DC403B">
                <Fragmento />
            </Card>

            <Card titulo = '#2 - Com Parametro' color = "#78C0A8">
                <ComParametro 
                    titulo = 'Alunos'
                    subtitulo = 'Pedro Silva'
                    nota = {7}
                />
            </Card>

            <Card titulo = '#1 - Primeiro' color = "#6E9ECF">
                <Primeiro></Primeiro>
            </Card>
        </div>
        

    </div>
)