import React, { Component } from 'react';

class container extends Component {
    constructor(props) {
      super(props);
      this.state = {value: 'container'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Pick your size if the container: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
        
          <h5>  Pick your size if the container:</h5>
            <input type="checkbox"
               value="Plain Cone"
               checked={this.state.selectedOption === "Plain Cone"}
               onChange={this.radioChange} />Plain Cone

        <input type="checkbox"
               value="Sugar Conee"
               checked={this.state.selectedOption === "Sugar Conee"}
               onChange={this.radioChange}/>Sugar Conee
      <input type="checkbox"
               value="paper cup"
               checked={this.state.selectedOption === "paper cup"}
               onChange={this.radioChange} />paper cup
        
      </div> 

      );
    }
  }
  export default container;