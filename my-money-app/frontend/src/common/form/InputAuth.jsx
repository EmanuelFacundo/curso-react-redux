import React from "react"
import If from '../operator/If'

export default props => {
    <If test={!props.hiden}>
        <div className='form-group has-feedback'>
            <input {...props.input} type={props.type}
                className='form-control'
                placeholder={props.placeholder}
                readOnly={props.readOnly} />

            <span className={`glyphicon glyphicon-${props.icon} 
                form-control-feedbak`}></span>
        </div>
    </If>
}