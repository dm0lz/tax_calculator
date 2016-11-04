import React from 'react';
import TaxForm from '../containers/tax-form.js'

class Tax extends React.Component {
  render() {
    var divStyle = {
      textAlign: 'center'
    };
    return (
      <div style={divStyle}>
        <h1>SASU tax calculator</h1>
        <hr />
        <TaxForm />
      </div>
    );
  }
}

export default Tax;
