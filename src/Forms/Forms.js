import React from 'react'
import "./Forms.css"
import Button from "../Buttons/Button"

class Forms extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: "",
        counter: 0,
        voucher: ""
        };
    }

    voucher = () => {
      this.setState({
        voucher: this.input.value
      })      
    }
    
    counterUp = () => {
      this.setState({
        counter: this.state.counter + 1
      })
    }

    counterDown = () => {
      this.setState({
        counter: this.state.counter - 1
      })
    }

    render() {  
      let classes = '';
      let types = ['text', 'select', 'number', 'textbutton', 'checkbox']
      if (types.includes(this.props.type)) {
          classes += ` form-${this.props.type}`
      }

      if(this.props.medium) {
        classes += ` return-medium`
      }

      if(this.props.large) {
        classes += ` return-large`
      }

      if(this.props.fill) {
        classes += ` selectFill`
      }

      let placeholder = this.props.placeholder
      if (placeholder === "") {
          placeholder = this.props.label
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

    if (this.props.select) { 
      return (
      <div>
        <select className={classes}>
            <option defaultValue>{this.props.label}</option>
            <option>option</option>
            <option>option</option>
            <option>option</option>
        </select>
      </div>
      )
  }

    if(this.props.number) {
      return (
          <div className={classes}>
              <div className="numberClick" onClick={this.counterDown}>-</div>
              <span>{this.state.counter}</span>
              <div className="numberClick" onClick={this.counterUp}>+</div>
          </div>
      )
  }  


  if(this.props.textbutton) {
    return (
        <form className={classes}>
        <input onSubmit={() => {this.setState({voucher: this.input.value})}} className={"textButtonInputDiv"} type="text" placeholder={placeholder}/>
        <Button label="Redeem" type="primary" form whiteText/>
        </form>
    )
}  
    


  }
}



export default Forms;