import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import {robots} from './robots';

class App extends Component {
  render() {
    const cardList = robots.map((user,i) => {
      return <Card id={robots[1].id} name={robots[1].name} robots={robots} />
    })
    return (
       <div>
         {cardList}
         {cardList}
       </div>
    );
  }
}

export default App;