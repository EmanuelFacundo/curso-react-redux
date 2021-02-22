import './TabelaProdutos.css'
import React from 'react'
import Produtos from '../../data/produtos'


export default props => {

    const produtosTD = Produtos.map((produtos, i) => {
        return(
            <tr key = {produtos.id} className = {i % 2 == 0 ? 'Par' : 'Impar'}>
                <td>{produtos.id}</td>
                <td>{produtos.nome}</td>
                <td>R${produtos.valor}</td>
            </tr>
            
        )
    })

    return (
        <div className = "TabelaProdutos">
            <table>
                <tr>
                    <th>
                        <strong>KEY</strong>
                    </th>
                    <th>
                        <strong>Produtos</strong>
                    </th>
                    <th>
                        <strong>Valores</strong>
                    </th>                
                </tr>
                {produtosTD}
            </table>
        </div>
    )
}