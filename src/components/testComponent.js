import React from 'react';
//import {Component} from 'react';

class TestComponent extends React.Component{

  constructor(props) {
    super(props);
    this.state = {ca: 10000};
    this._handleCaChange = this._handleCaChange.bind(this);
  }

  _handleCaChange(e) {
    this.setState({ca: e.target.value});
  }

  render() {
    return(
      <div>
        <h1>Hello world !</h1>
        <form>
          <input type="text" value={this.state.ca} onChange={this._handleCaChange} />
        </form>
      </div>
    );
  }

}

export default TestComponent;
