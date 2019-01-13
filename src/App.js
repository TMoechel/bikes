import React, { Component } from 'react';
import './App.css';

const BikeData = [
  {name: "Garry Fisher"},
  {name: "Scott"}
]
const TMLabel = props => <span> {props.Text} </span> 
const TMInput = props => <input type={props.Type} />  

class PropertyList extends Component {
  render() {
    return (
    <div>
    <ul>
      {this.props.Bikes.map(bike => <li> {bike.name}</li>) }      
    </ul>
  </div>
  )}
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <TMLabel Text = "Bike name"/>
            <TMInput Type= "Text" />
            <PropertyList Bikes = {BikeData}/>
          </p>

        </header>
      </div>
    );
  }
}

export default App;
