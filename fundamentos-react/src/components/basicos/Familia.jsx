import React, { cloneElement } from 'react'
import FamiliaMembro from './FamiliaMembro'


export default (props) => {
    return (
        <div>
            {
                React.Children.map(props.children, (chield) => {
                    return cloneElement(chield, props)
                })

            }

            {
            /* {
                props.children.map((chield, i) => {
                    return cloneElement(chield, {...props, key : i} )
                })
            } */}
        </div>
    )
}