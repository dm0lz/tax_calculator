import React from 'react';
import TaxDetail from '../components/tax-detail.js';

class TaxForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {ca: 50000, expenses: 5000, grossResult: 45500};
    this.handleChange = this.handleChange.bind(this);
  }
  compute(type, value) {
    switch(type) {
      case "ca":
        this.setState({ca: value, grossResult: parseInt(value - this.state.expenses)});
      break;
      case "expenses":
        this.setState({expenses: value, grossResult: parseInt(this.state.ca - value)});
      break;
      case "grossResult":
        this.setState({grossResult: value, ca: parseInt(parseInt(value) + parseInt(this.state.expenses))});
      break;
    }
  }
  handleChange(e){
    this.compute(e.target.className, e.target.value);
  }
  render() {
    return (
      <div>
        <form>
          <label>CA</label>
          <input type="number" step="1000" className="ca" value={parseInt(this.state.ca)} onChange={this.handleChange} />&nbsp;&nbsp;&nbsp;
          <label>Frais</label>
          <input type="number" step="500" className="expenses" value={parseInt(this.state.expenses)} onChange={this.handleChange} />&nbsp;&nbsp;&nbsp;
          <label>Résultat brut</label>
          <input type="number" step="1000" className="grossResult" value={parseInt(this.state.grossResult)} onChange={this.handleChange} />
        </form>
        <hr />
        <TaxDetail tax_info={this.state} />
      </div>
    );
  }
}

export default TaxForm;
