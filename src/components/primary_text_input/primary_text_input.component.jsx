import React from 'react'
import "./primary_text_input.style.scss"

const PrimaryTextInput = (props)=> {
    return (
        
            props.readOnlyAttr ?
            <input {...props}  readOnly autoComplete="off" className="form-input primary-text" />
            :
            <input {...props} autoComplete="off" className="form-input primary-text" />
        
            )
}

export default PrimaryTextInput