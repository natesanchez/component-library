import React from 'react';
import "./Button.css"


const Button = (props) => {
    let classList = '';
    let types = ['primary', 'danger', 'success', 'warning', 'white', 'gradient']
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }
    if (props.large) {
        classList += `button-large`
    }

    if (props.white) {
        classList += `button-white`
    }


    return <button className={classList}>{props.label}</button>
}


export default Button; 