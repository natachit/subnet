import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  convertToSubnet,
} from './utils/helper'

class App extends Component {
  state = {
    ip: '192.168.1.204',
    mask: 32,
    subnet: convertToSubnet(32),
    ipclass: '',
  };

  onIpChange = event => {
    let ip = event.target.value;
    this.setState({ip: ip});
  }

  onSubnetChange = event => {
    let mask = event.target.value;
    this.setState({mask: mask, subnet: convertToSubnet(mask)});
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
        Subnet Calculator
        </p>
        <p>ip <input type="text" value={this.state.ip} onChange={this.onIpChange}/></p>
        <p>subnet <input type="int" value={this.state.mask} onChange={this.onSubnetChange}/></p>
        {this.state.subnet}
      </div>
    );
  }
}

export default App;
