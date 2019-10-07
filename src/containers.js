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
        <h5> Select the size of the container:</h5>        
        <input type="radio"
               value="Plain Cone"
               checked={this.state.selectedOption === "Plain Cone"}
               onChange={this.radioChange} />Plain Cone

        <input type="radio"
               value="Sugar Conee"
               checked={this.state.selectedOption === "Sugar Conee"}
               onChange={this.radioChange}/>Sugar Conee
      <input type="radio"
               value="paper cup"
               checked={this.state.selectedOption === "paper cup"}
               onChange={this.radioChange} />paper cup
        
        <p> <strong>{this.state.selectedOption}</strong></p>
      </div> 
    );
  }
}

export default  Flavours;








































