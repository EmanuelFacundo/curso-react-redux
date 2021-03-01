import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import UseCallBackButton from "./UseCallbackButtons";

const UseCallback = (props) => {

    const [count, setCount] = useState(0)

    const inc = useCallback(function(delta){
        setCount(curr => curr + delta)
    }, [setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memorizada!"
            />

            <SectionTitle tilte="useCallback" />
            <div className="center">
                <span className="text">{count}</span>
                <UseCallBackButton inc={inc} />
            </div>
        </div>
    )
}

export default UseCallback
