import './Contador.css'
import React, {Component} from 'react'
import Botoes from './Botoes'
import Display from './Display'
import PassoForm from './PassoForm'

class Contador extends Component {

    state = {
        numero: this.props.valorIncial || 0,
        inc: this.props.passoInc || 5,
        dec: this.props.passoDec || 5
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.inc
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.dec
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            inc: novoPasso,
            dec: novoPasso
        })
    }


    render(){
        return(
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero = {this.state.numero}/>
                <PassoForm passoInc = {this.state.inc}  setPasso = {this.setPasso}/>
                <Botoes setInc = {this.inc} setDec = {this.dec}/>
            </div>
        )
    }
}


export default Contador