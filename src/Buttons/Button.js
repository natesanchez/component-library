import React from 'react';
import "./Button.css"


const Button = (props) => {
    let classList = '';
    let types = ['primary', 'danger', 'success', 'warning',]
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }
    if (props.large) {
        classList += ` button-large`
    }

    if (props.whiteText) {
        classList += ` button-whiteText`
    }

    if (props.white) {
        classList += ` button-white`
    }

    if (props.gradient) {
        classList += ` button-${props.type}-gradient`
    }  
    
    if (props.defaultGradient) {
        classList += ` button-default-gradient`
    } 

    if (props.form) {
        classList += ` button-form`
    } 

    if (props.form2) {
        classList += ` button-form-2`
    } 

    return <button onClick={props.onClick} className={classList}>{props.label}</button>
}

Button.defaultProps = {
    onClick: (e) => {e.preventDefault(); console.log('hi')},
    label: "default"
}


export default Button; 