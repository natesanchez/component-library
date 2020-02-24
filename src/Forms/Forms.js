import React from 'react'
import "./Forms.css"

class Forms extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: ""
        };
    }
    render() {  
      console.log(this.state.inputValue)
      let classes = '';
      let types = ['text', 'select', 'number', 'textbutton', 'checkbox']
      if (types.includes(this.props.type)) {
          classes += ` form-${this.props.type}`
      }

      let placeholder = this.props.placeholder
      if (!placeholder) {
          placeholder = this.props.label
      }

      if(this.props.medium) {
        classes += ` text-medium`
      }

      if(this.props.large) {
        classes += ` text-large`
      }

    if (this.props.text) {
    return (
      <div>
        <label className="text-label" htmlFor="input">{this.props.label}</label>
        <br/>
        <input onChange={(e) => {this.setState({inputValue: e.target.value})}} className={classes} 
        type="text" name="input" placeholder={placeholder}/>
      </div>
      )
    }
  }
}



export default Forms;