import React, { Component } from 'react';
import './App.css';


const TMLabel = props => <span> {props.Text} </span> 
const TMInput = props => <input type= {props.Type} />  


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <TMLabel Text = "Bike name"/>
            <TMInput Type= "Text" />
          </p>

        </header>
      </div>
    );
  }
}

export default App;
