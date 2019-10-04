import React, { Component } from 'react';

class Flavours extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: ''
    };
  this.radioChange = this.radioChange.bind(this);
}

  radioChange(e) {
    this.setState({
      selectedOption: e.currentTarget.value
    });
  }
  
  render() {
    return (
      <div>
        <h5> Pick your favorite flavor:</h5>        
        <input type="radio"
               value="Vanilla"
               checked={this.state.selectedOption === "Vanilla"}
               onChange={this.radioChange} />Vanilla

        <input type="radio"
               value="Chocolate"
               checked={this.state.selectedOption === "Chocolate"}
               onChange={this.radioChange}/>Chocolate
      <input type="radio"
               value="Strawberry"
               checked={this.state.selectedOption === "Strawberry"}
               onChange={this.radioChange} />Strawberry
        
        <p> <strong>{this.state.selectedOption}</strong> has be chosen as flavor!</p>
      </div> 
    );
  }
}

export default  Flavours;

