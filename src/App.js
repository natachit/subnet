import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  convertToSubnet,
} from './utils/helper'

class App extends Component {
  state = {
    ip: '192.168.1.204',
  };

  onIpChange = event => {
    let ip = event.target.value;
    this.setState({ip: ip});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        {this.state.ip}
        <input type="text" value={this.state.ip} onChange={this.onIpChange}/>
        </p>
      </div>
    );
  }
}

export default App;
