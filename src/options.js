import React, { Component } from 'react';
import toppings from './assets/data/Options'


class toppingsApp extends Component {
  constructor(props) {

    super(props);
    this.state = {
      toppings,
      selectedToppings: []
    };
  }

  manageTopping = e => {
    const toppingId = e.target.value;
    // look at find on JS arrays
    const currentTopping = this.state.selectedToppings.find(
      topping => topping.id == toppingId
    );

    if (currentTopping) {
      // remove from the list
      // look at filter
      const newToppingList = this.state.selectedToppings.filter(
        topping => topping.id != toppingId
      );

      this.setState({
        // look at spread operator
        selectedToppings: [...newToppingList]
      });
    } else {
      // add to the list
      const topping = this.state.toppings.find(
        topping => topping.id == toppingId
      );
      this.setState({
        selectedToppings: [...this.state.selectedToppings, topping]
      });
    }
  };

  render() {
    const toppingsList = this.state.toppings.map(t => (
      <li key={t.id}>
        <input type="checkbox" value={t.id} onClick={this.manageTopping} />{" "}
        {t.name}
      </li>
    ));

    const selectedToppingsList = this.state.selectedToppings.map(t => (
      <li key={t.id}>
        <input type="checkbox" value={t.id} onClick={this.manageTopping} />{" "}
        {t.name}
      </li>
    ));

    return (
      <div className="App">
        <h1>Hello IceCream</h1>
        <ul>{toppingsList}</ul>
        <h3>Selected toppings</h3>
        <ul>{selectedToppingsList}</ul>
      </div>
    );
  }
}



  export default toppingsApp;



















