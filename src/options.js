import React, { Component } from 'react';

class topping extends Component {
    constructor(props) {
      super(props);
      this.state = {value: 'topping '};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('choose your topping : ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
        
          <h5>  Choose your topping:</h5>
            <input type="checkbox"
               value="Crumbed peanuts"
               checked={this.state.selectedOption === "Crumbed peanuts"}
               onChange={this.radioChange} />Crumbed peanuts&nbsp;&nbsp;&nbsp;&nbsp;

        <input type="checkbox"
               value="Caramal dip"
               checked={this.state.selectedOption === "Caramal dip"}
               onChange={this.radioChange}/>Caramal dip&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <input type="checkbox"
               value="Smarties"
               checked={this.state.selectedOption === "Smarties"}
               onChange={this.radioChange} />Smarties&nbsp;&nbsp;&nbsp;&nbsp;

       <input type="checkbox"
               value="Oreos"
               checked={this.state.selectedOption === "Oreos "}
               onChange={this.radioChange} />Oreos&nbsp;&nbsp;&nbsp;&nbsp;

        <input type="checkbox"
               value="Astros"
               checked={this.state.selectedOption === "Astros"}
               onChange={this.radioChange} />Astros         
        
      </div> 

      );
    }
  }
  export default topping;




















// import React from 'react';
// import Select from 'react-select';
 
// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];
 
// class App extends React.Component {
//   state = {
//     selectedOption: null,
//   };
//   handleChange = selectedOption => {
//     this.setState({ selectedOption });
//     console.log(`Option selected:`, selectedOption);
//   };
//   render() {
//     const { selectedOption } = this.state;
 
//     return (
//       <Select
//         value={selectedOption}
//         onChange={this.handleChange}
//         options={options}
//       />
//     );
//   }
// }
// export default App;
// // import React, { Component } from 'react';

// // class Toppings extends Component {
// //   constructor() {
// //     super();
    
// //     this.state = {
// //       showMenu: false,
// //     };
    
// //     this.showMenu = this.showMenu.bind&nbsp;&nbsp;(this);
// //     this.closeMenu = this.closeMenu.bind(this);
// //   }
  
// //   showMenu(event) {
// //     event.preventDefault();
    
// //     this.setState({ showMenu: true }, () => {
// //       document.addEventListener('click', this.closeMenu);
// //     });
// //   }
  
// //   closeMenu(event) {
    
// //     if (!this.dropdownMenu.contains(event.target)) {
      
// //       this.setState({ showMenu: false }, () => {
// //         document.removeEventListener('click', this.closeMenu);
// //       });  
      
// //     }
// //   }

// //   render() {Plain Cone
// //     return (
// //       <div>
// //           <h5>click the button and select the topping you like!</h5>
// //         <button onClick={this.showMenu}>
// //         Toppings
// //         </button>
        
// //         {
// //           this.state.showMenu
// //             ? (
// //               <div
// //                 className="menu"
// //                 ref={(element) => {
// //                   this.dropdownMenu = element;
// //                 }}
// //               ><br></br>
// //                 <button value='20'> Crumbed peanuts </button>&nbsp;&nbsp; 
// //                 <button> Caramal dip </button>&nbsp;&nbsp; 
// //                 <button> Chocolate Dip </button>&nbsp;&nbsp; 
// //                 <button> Smarties </button>&nbsp;&nbsp; 
// //                 <button> Oreos </button>&nbsp;&nbsp; 
// //                 <button> Astros </button>
// //               </div>
// //             )
// //             : (
// //               null
// //             )
// //         }
// //       </div>
// //     );
// //   }
// // }
// // export default Toppings;
