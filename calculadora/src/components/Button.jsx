import React from 'react'
import './Button.css'

export default function button (props) {

    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''


    return(
        <button 
            onClick={_ =>props.click && props.click(props.label)}
            className={classes} >
            {props.label}
        </button>
    )
}