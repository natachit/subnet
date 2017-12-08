import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {
  convertToSubnet, tenToBinary, getNetworkAddress, wildCard, ipClass, cidr, short, 
  binaryId, integerId, hexId, ipType, broadcast, totalHost, numHost, range , checkIp, checkSubnet
} from './utils/helper'

injectTapEventPlugin();

class App extends Component {
  state = {
    ip: '192.168.1.204',
    mask: 32,
    e: [],
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
    if (checkIp(ip) && checkSubnet(mask)) {
      this.setState({e: ''})
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
    else {
      let tmp = ['','']
      if (!checkIp(this.state.ip)) {
        tmp[0] = 'invalid ipv4'
      }
      if (!checkSubnet(this.state.mask)) {
        tmp[1] = 'invalid number'
      }
      this.setState({output: [], e: tmp})
      return
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <p className="App-title">Subnet Calculator</p>
          <TextField 
            floatingLabelText="IP Address" 
            floatingLabelFixed={true}
            errorText={this.state.e[0]} 
            value={this.state.ip} 
            onChange={this.onIpChange}/> 
          <br />
          <TextField 
            floatingLabelText="Subnet" 
            floatingLabelFixed={true}
            errorText={this.state.e[1]} 
            value={this.state.mask} 
            onChange={this.onSubnetChange}/>
          <p>{this.state.e}</p>
          <FlatButton label="Calculate" primary={true} onClick={this.calculate}/>
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
      </MuiThemeProvider>
    );
  }
}

export default App;
