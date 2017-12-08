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
    status: false,
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
            hintText="ex. 192.168.1.204" 
            floatingLabelFixed={true}
            errorText={this.state.e[0]} 
            value={this.state.ip} 
            onChange={this.onIpChange}/> 
          <br />
          <TextField 
            floatingLabelText="Subnet" 
            hintText="ex. 32" 
            floatingLabelFixed={true}
            errorText={this.state.e[1]} 
            value={this.state.mask} 
            onChange={this.onSubnetChange}/>
          <br />
          <FlatButton label="Calculate" primary={true} onClick={this.calculate}/>
          <div class="text">
            <p>IP Address: <t class="output">{this.state.output[0]}</t></p>
            <p>Network Address: <t class="output">{this.state.output[1]}</t></p>
            <p>Usable Host IP Range: <t class="output">{this.state.output[2]}</t></p>
            <p>Broadcast Address: <t class="output">{this.state.output[3]}</t></p>
            <p>Total Number of Hosts: <t class="output">{this.state.output[4]}</t></p>
            <p>Number of Usable Hosts: <t class="output">{this.state.output[5]}</t></p>
            <p>Subnet Mask: <t class="output">{this.state.output[6]}</t></p>
            <p>Wildcard Mask: <t class="output">{this.state.output[7]}</t></p>
            <p>Binary Subnet Mask: <t class="output">{this.state.output[8]}</t></p>
            <p>IP Class: <t class="output">{this.state.output[9]}</t></p>
            <p>CIDR Notation: <t class="output">{this.state.output[10]}</t></p>
            <p>IP Type: <t class="output">{this.state.output[11]}</t></p>
            <p>Short: <t class="output">{this.state.output[12]}</t></p>
            <p>Binary ID: <t class="output">{this.state.output[13]}</t></p>
            <p>Integer ID: <t class="output">{this.state.output[14]}</t></p>
            <p>Hex ID: <t class="output">{this.state.output[15]}</t></p>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
