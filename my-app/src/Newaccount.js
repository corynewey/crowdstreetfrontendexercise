import React from "react";

class UserName extends React.Component {
  constructor(props) {
    super();
    this.state = { val: '', className: 'error-input' }
  }

  handleChange = (e) => {
    this.setState({ val: e.target.value });
  }

  render() {
    // I had planned on using the classes that I defined in App.css, but they never seem to take effect. So I'm doing
    // it with styles here in the render function.
    let style = {};
    let errorStyle = { display: "none" };
    // // validate value
    // let regex = /^\$?[0-9]+(\.?[0-9]?[0-9]?)$/;
    // if (this.state.val.length > 0 && !regex.test(this.state.val)) {
    //   style.backgroundColor = 'pink';
    //   errorStyle = { color: "red", fontWeight: "bold" };
    // }
    // else {
    //   // Let our parent know we've changed.
    //   this.props.onChange(this.props.name, this.state.val);
    // }
    return (
        <div>
          Username <input style={style} type="text" value={this.state.val} onChange={this.handleChange}/>
          <div style={errorStyle}>Please enter only valid email addresses.</div>
        </div>
    );
  }
}

class NewAccountPage extends React.Component {

  constructor(props) {
    super();
  }

  handleChildChange(name, value) {
  }

  renderUsername() {
    return <UserName name="investmentAmount" onChange={this.handleChildChange}/>;
  }
  // renderPassword1() {
  //   return <Password1 name="investmentType" onChange={this.handleChildChange}/>;
  // }
  // renderPassword2() {
  //   return <Password2 name="netWorth" onChange={this.handleChildChange}/>;
  // }

  render() {
    const style = { textAlign: "center", width: "100%" };
    const formStyle = { textAlign: "left", display: "inline-block", margin: "0 auto" };
    return (
        <div>
          <div style={style}>
            <h1>Create New Account</h1>
          </div>
          <div style={style}>
            <div style={formStyle}>
              {this.renderUsername()}
            </div>
          </div>
          <div style={style}>
            <button type="button">Submit</button>
          </div>
        </div>
    );
  }
}

export default NewAccountPage;
