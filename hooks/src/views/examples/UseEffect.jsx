import React, {useState, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(number) {
    const n = parseInt(number)
    if (n < 0) return -1
    if (n === 0) return 1
    
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {

    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);

    useEffect(function(){
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function() {
        if( fatorial > 1000000){
            document.title = "EITA!"
        }else{
            document.title = "React App"
        }
    },[fatorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Não Existe!' : fatorial}</span>
                </div>
                <input className="input" value={number} type="number" onChange={(e) => setNumber(e.target.value)}/>
            </div>
            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{number % 2 === 0 ? 'Par': 'Impar'}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
