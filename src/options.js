import React, { Component } from 'react';

class Toppings extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div>
          <h5>click the button and select the topping you like!</h5>
        <button onClick={this.showMenu}>
        Toppings
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              ><br></br>
                <button> Crumbed peanuts </button>&nbsp;&nbsp; 
                <button> Caramal dip </button>&nbsp;&nbsp; 
                <button> Chocolate Dip </button>&nbsp;&nbsp; 
                <button> Smarties </button>&nbsp;&nbsp; 
                <button> Oreos </button>&nbsp;&nbsp; 
                <button> Astros </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}
export default Toppings;