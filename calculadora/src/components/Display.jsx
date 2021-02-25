import React from 'react'
import './Display.css'

export default function display(props){
    return(
        <div className="Display">
            {props.value}
        </div>
    )
}