import React, { Component } from 'react';
import './App.css';
import {
  convertToSubnet, tenToBinary, getNetworkAddress, wildCard, ipClass, cidr, short, 
  binaryId, integerId, hexId, ipType, broadcast, totalHost, numHost, range , checkIp
} from './utils/helper'

class App extends Component {
  state = {
    ip: '192.168.1.204',
    mask: 32,
    e: '',
    output: [],
  };

  onIpChange = event => {
    let ip = event.target.value;
    this.setState({ip: ip});
  }

  onSubnetChange = event => {
    let mask = event.target.value;
    this.setState({mask: mask});
  }

  calculate = () => {
    const ip = this.state.ip
    const mask = this.state.mask
    this.setState({output: [
      ip, 
      getNetworkAddress(ip, mask),
      range(ip, mask),
      broadcast(ip, mask),
      totalHost(ip, mask),
      numHost(ip, mask),
      convertToSubnet(mask),
      wildCard(mask),
      tenToBinary(convertToSubnet(mask)),
      ipClass(mask),
      cidr(mask),
      ipType(ip),
      short(ip, mask),
      binaryId(ip),
      integerId(ip),
      hexId(ip)
      ]})
  }

  render() {
    return (
      <div className="App">
        <p className="App-title">
        Subnet Calculator
        </p>
        <p>IP <input type="text" value={this.state.ip} onChange={this.onIpChange}/></p>
        <p>Subnet <input type="int" value={this.state.mask} onChange={this.onSubnetChange}/></p>
        <button
        className="btn btn-default"
        onClick={this.calculate}>Calculate</button>
        <div class="text">
        <p>IP Address: {this.state.output[0]}</p>
        <p>Network Address: {this.state.output[1]}</p>
        <p>Usable Host IP Range: {this.state.output[2]}</p>
        <p>Broadcast Address: {this.state.output[3]}</p>
        <p>Total Number of Hosts: {this.state.output[4]}</p>
        <p>Number of Usable Hosts: {this.state.output[5]}</p>
        <p>Subnet Mask: {this.state.output[6]}</p>
        <p>Wildcard Mask: {this.state.output[7]}</p>
        <p>Binary Subnet Mask: {this.state.output[8]}</p>
        <p>IP Class: {this.state.output[9]}</p>
        <p>CIDR Notation: {this.state.output[10]}</p>
        <p>IP Type: {this.state.output[11]}</p>
        <p>Short: {this.state.output[12]}</p>
        <p>Binary ID: {this.state.output[13]}</p>
        <p>Integer ID: {this.state.output[14]}</p>
        <p>Hex ID: {this.state.output[15]}</p>
        </div>
      </div>
    );
  }
}

export default App;
