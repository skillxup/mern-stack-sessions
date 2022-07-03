import React, { Component } from 'react';
import my_1037 from './images/1037-1000x600.jpg';
import './App.css';

let spanStyle = {
  color: '#2ade3c', 
  float: 'right', 
  textDecoration: 'underline', 
  lineHeight: '1.5rem', 
  fontWeight: 'bold'
};

class App extends Component {
  render() {
    let doExpr = null;
    let showExpr = false;

    if(showExpr) {
      doExpr = Math.floor(Math.random() * 365);
    } else {
      doExpr = 'no expr';
    }

    return(
      <div>
        <h4>A Template for Killer Website Content</h4>
  
        <p>Over the years of developing websites for clients, I’ve learned that the age-old adage, <span style={spanStyle}> “If you want it done right, you gotta do it yourself,” </span> can be a two-way street.</p>

        <p>random number: {doExpr}</p>

        <img src={require('./images/1036-1000x600.jpg')} width="190px" />

        <p>In cases where we give in and let the client take the content reins, we at least want to make sure they are equipped with a template that gives them a fighting chance to produce effective website content that drives action. Here is a template we like to use, and an explanation of what’s included.</p>
  
        <img src={my_1037} width='190px' />

        <p>Of course, there are companies out there that have great web writers internally, but most don’t. And the thought of a company turning a great website content strategy <span style={{color: "#f3de2a", backgroundColor: '#fedece'}}> (that we slaved over) </span> into an ineffective “brochure site” gives me heartburn. But sometimes you have to pick your battles.</p>
      </div>
    );
  }
}

export default App;