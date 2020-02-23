
import React from 'react';
import "./TextInput.css"

class TextInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          label: "Email",
          input: "input-regular",
          inputValue: ""
        };
    }

    componentDidMount() {
        if (this.props.medium) {
            this.setState({input: "input-medium"})
        }
    
        if (this.props.large) {
            this.setState({input: "input-large"})
        }
    }



    render() {  
      return (
      <div>
      <label htmlFor="input">{this.state.label}</label>
      <br/>
      <input onChange={(e) => {this.setState({inputValue: e.target.value})}} className={this.state.input} 
      type="text" name="input" placeholder={this.state.label}/>
      </div>
      )
    }
  }



export default TextInput;