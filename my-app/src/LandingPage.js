import React from "react";

class InvestmentAmount extends React.Component {
  constructor(props) {
    super();
    this.state = { val: '0.00', className: 'error-input' }
  }

  handleChange = (e) => {
    this.setState({ val: e.target.value });
  }

  render() {
    // I had planned on using the classes that I defined in App.css, but they never seem to take effect. So I'm doing
    // it with styles here in the render function.
    let style = {};
    let errorStyle = { display: "none" };
    // validate value
    let regex = /^\$?[0-9]+(\.?[0-9]?[0-9]?)$/;
    if (this.state.val.length > 0 && !regex.test(this.state.val)) {
      style.backgroundColor = 'pink';
      errorStyle = { color: "red", fontWeight: "bold" };
    }
    else {
      // Let our parent know we've changed.
      this.props.onChange(this.props.name, this.state.val);
    }
    return (
        <div>
          Investment Amount <input style={style} type="text" value={this.state.val} onChange={this.handleChange} title="investAmountInput" />
          <div style={errorStyle} title="investAmountError">Please enter only dollar amounts.</div>
        </div>
    );
  }
}

class InvestmentType extends React.Component {
  constructor(props) {
    super();
    this.state = { val: "" }
  }

  handleChange = (e) => {
    this.setState( { val: e.target.value });
    // Let our parent know we've changed.
    this.props.onChange(this.props.name, this.state.val);
  }

  render() {
    return (
        <div>
          Investment Type <input type="text" value={this.state.val} onChange={this.handleChange}/>
        </div>
    );
  }
}

class NetWorth extends React.Component {
  constructor(props) {
    super();
    this.state = { val: "0.00" }
  }

  handleChange = (e) => {
    this.setState({ val: e.target.value });
  }

  render() {
    // I had planned on using the classes that I defined in App.css, but they never seem to take effect. So I'm doing
    // it with styles here in the render function.
    let style = {};
    let errorStyle = { display: "none" };
    // validate value
    let regex = /^\$?[0-9]+(\.?[0-9]?[0-9]?)$/;
    if (this.state.val.length > 0 && !regex.test(this.state.val)) {
      style.backgroundColor = 'pink';
      errorStyle = { color: "red", fontWeight: "bold" };
    }
    else {
      // Let our parent know we've changed.
      this.props.onChange(this.props.name, this.state.val);
    }
    return (
        <div>
          Total Net Worth <input style={style} type="text" value={this.state.val} onChange={this.handleChange}/>
          <div style={errorStyle}>Please enter only dollar amounts.</div>
        </div>
    );
  }
}

class YearlyIncome extends React.Component {
  constructor(props) {
    super();
    this.state = { val: "0.00" }
  }

  handleChange = (e) => {
    this.setState({ val: e.target.value });
  }

  render() {
    // I had planned on using the classes that I defined in App.css, but they never seem to take effect. So I'm doing
    // it with styles here in the render function.
    let style = {};
    let errorStyle = { display: "none" };
    // validate value
    let regex = /^\$?[0-9]+(\.?[0-9]?[0-9]?)$/;
    if (this.state.val.length > 0 && !regex.test(this.state.val)) {
      style.backgroundColor = 'pink';
      errorStyle = { color: "red", fontWeight: "bold" };
    }
    else {
      // Let our parent know we've changed.
      this.props.onChange(this.props.name, this.state.val);
    }
    return (
        <div>
          User Estimated Yearly Income <input style={style} type="text" value={this.state.val} onChange={this.handleChange}/>
          <div style={errorStyle}>Please enter only dollar amounts.</div>
        </div>
    );
  }
}

class CreditScore extends React.Component {
  constructor(props) {
    super();
    this.state = { val: "500" }
  }

  handleChange = (e) => {
    this.setState({ val: e.target.value });
  }

  render() {
    // I had planned on using the classes that I defined in App.css, but they never seem to take effect. So I'm doing
    // it with styles here in the render function.
    let style = {};
    let errorStyle = { display: "none" };
    // validate value
    let regex = /^[0-9]?[0-9]?[0-9]?$/;
    if (this.state.val.length > 0 && !regex.test(this.state.val) || this.state.val / 1 < 300 || this.state.val / 1 > 850) {
      style.backgroundColor = 'pink';
      errorStyle = { color: "red", fontWeight: "bold" };
    }
    else {
      // Let our parent know we've changed.
      this.props.onChange(this.props.name, this.state.val);
    }
    return (
        <div>
          User Estimated Credit Score <input type="text" value={this.state.val} onChange={this.handleChange}/>
          <div style={errorStyle}>Please enter only numbers between 300 and 850.</div>
        </div>
    );
  }
}

class LandingPage extends React.Component {

  constructor(props) {
    super();
    window.landingPage = this;
    this.state = {
      investmentAmount: 0,
      investmentType: null,
      netWorth: 0,
      yearlyIncome: 0,
      creditScore: 0
    }
  }

  handleChildChange(name, value) {
    // I know that the state should be considered immutable and we should create a new one for each update, but
    // this state isn't being used for UI. We just need to keep track of values for form submission.
    window.landingPage.state[name] = value;
    console.log(window.landingPage.state);
  }

  renderInvestmentAmount() {
    return <InvestmentAmount name="investmentAmount" onChange={this.handleChildChange}/>;
  }
  renderInvestmentType() {
    return <InvestmentType name="investmentType" onChange={this.handleChildChange}/>;
  }
  renderNetWorth() {
    return <NetWorth name="netWorth" onChange={this.handleChildChange}/>;
  }
  renderYearlyIncome() {
    return <YearlyIncome name="yearlyIncome" onChange={this.handleChildChange}/>;
  }
  renderCreditScore() {
    return <CreditScore name="creditScore" onChange={this.handleChildChange}/>;
  }

  handleSubmit() {
    // I don't know why this is undefined here. It isn't undefined for my other handler functions.
    let self = this ? this : window.landingPage;
    self.mockFetch('https://www.nowhere.com/checkQualifications', {
      method: 'POST', body: JSON.stringify(self.state)
    }).then(value => {
      if ('disqualify' === value) {
        self.props.history.push("/disqualification");
      }
      else {
        self.props.history.push("/newAccount");
      }
    });
    console.log(self);
  }

  mockFetch(url, options) {
    let parms = JSON.parse(options.body);

    // Very quick and dirty...
    const disqualifiedMsg = 'disqualify';
    let decision = 'qualified';
    // if the Investment Amount is more than 1/5th of their Yearly Income
    if (parms.investmentAmount > (parms.yearlyIncome / 5)) { decision = disqualifiedMsg; }
    // or their Estimated Credit is below 600
    if (parms.creditScore < 600) { decision = disqualifiedMsg; }
    // or their Investment Amount is more than 3% of their Total Net Worth
    if (parms.investmentAmount > (parms.netWorth * 0.03)) { decision = disqualifiedMsg; }
    // A `Bad Request` response should be returned for any Investment Amount above $9,000,000. I don't understand what
    // is meant by 'Bad Request' response (am I expected to return a response object that has an http response code?)
    // and since I would probably handle a bad request by routing the user to the "Disqualified" page anyway, just
    // return 'disqualify'.
    if (parms.investmentAmount > 9000000) { decision = disqualifiedMsg; }
    return new Promise((resolve, reject) => {
      resolve(decision);
    });
  }

  render() {
    const style = { textAlign: "center", width: "100%" };
    const formStyle = { textAlign: "left", display: "inline-block", margin: "0 auto" };
    return (
        <div>
          <div style={style}>
            <h1>Landing Page</h1>
          </div>
          <div style={style}>
            <div style={formStyle}>
              {this.renderInvestmentAmount()}
              {this.renderInvestmentType()}
              {this.renderNetWorth()}
              {this.renderYearlyIncome()}
              {this.renderCreditScore()}
            </div>
          </div>
          <div style={style}>
            <button type="button" onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
    );
  }
}

export default LandingPage;
