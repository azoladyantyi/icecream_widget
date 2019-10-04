import React, { Component } from "react";
import Options from "./options";
import Flavours from "./Flavours";
import Container from "./containers";


// import "./styles.css";

class App extends Component {
  render() {
    return(
      <div>
        <h1>Ice Cream Widget</h1>
        < Flavours/>
    
    <hr />
    < Container />
    
    <hr />
      < Options/>
    
      <hr />
     
        </div>
    )
  }

}


export default App;
