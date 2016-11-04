import React from 'react';
import numeral from 'numeral';

class TaxDetail extends React.Component {
  constructor(props){
    super(props);
  }
  personnal_income_tax(income) {
    if(income <= 9700){
      return 0;
    }else if (income <= 26791) {
      let second = (income - 9700) * 0.14;
      let first = (9700 - 0) * 0;
      return first + second;
    }else if (income <= 71826) {
      let third = (income - 26791) * 0.3;
      let second = (26791 - 9700) * 0.14;
      let first = (9700 - 0) * 0;
      return first + second + third;
    }else if (income <= 152108) {
      let fourth = (income - 71826) * 0.41;
      let third = (71826 - 26791) * 0.3;
      let second = (26791 - 9700) * 0.14;
      let first = (9700 - 0) * 0;
      return first + second + third + fourth;
    }else{
      let fifth = (income - 152108) * 0.45;
      let fourth = (152108 - 71826) * 0.41;
      let third = (71826 - 26791) * 0.3;
      let second = (26791 - 9700) * 0.14;
      let first = (9700 - 0) * 0;
      return first + second + third + fourth + fifth;
    }
  }
  total_income(grossResult){
    let tax_free = this.net_dividends(grossResult) - this.taxable_income(grossResult);
    let taxableIncome = this.taxable_income(grossResult);
    let taxed = taxableIncome - this.personnal_income_tax(taxableIncome);
    return tax_free + taxed;
  }
  csg_tax(grossResult){
    return 0.155 * grossResult;
  }
  net_dividends(grossResult){
    return grossResult - (0.155 * grossResult);
  }
  taxable_income(grossResult){
    return (grossResult - (0.155 * grossResult)) * 0.6;
  }
  render() {
    numeral.defaultFormat('0,0');
    return(
      <div>
        <h3>Chiffre d affaires</h3>
        <p>{numeral(this.props.tax_info.ca).format()}</p>
        <h3>Frais</h3>
        <p>{numeral(this.props.tax_info.expenses).format()}</p>
        <h3>Revenus Bruts (Bénéfices) :</h3>
        <p>{numeral(this.props.tax_info.grossResult).format()}</p>
        <h3>CSG/CRDS après IS de 0%</h3>
        <p>{numeral(this.csg_tax(this.props.tax_info.grossResult)).format()}</p>
        <h3>Dividendes Nets à verser</h3>
        <p>{numeral(this.net_dividends(this.props.tax_info.grossResult)).format()}</p>
        <h3>Revenus imposables après abattement de 40%</h3>
        <p>{numeral(this.taxable_income(this.props.tax_info.grossResult)).format()}</p>
        <h3>Impots sur le revenu</h3>
        <p>{numeral(parseInt(this.personnal_income_tax(this.taxable_income(this.props.tax_info.grossResult)))).format()}</p>
        <h3>Net après IR sur {this.net_dividends(this.props.tax_info.grossResult)} euros de dividendes</h3>
        <p>{numeral(parseInt(this.total_income(this.props.tax_info.grossResult))).format()}</p>
        <h3>Net Mensuel</h3>
        <p>{numeral(parseInt(this.total_income(this.props.tax_info.grossResult) / 12)).format()}</p>
      </div>
    );
  }
}

export default TaxDetail;
