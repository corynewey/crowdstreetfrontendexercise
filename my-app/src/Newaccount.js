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
    // validate value
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.state.val.length > 0 && !regex.test(this.state.val)) {
      style.backgroundColor = 'pink';
      errorStyle = { color: "red", fontWeight: "bold" };
    }
    return (
        <div>
          Username <input style={style} type="text" value={this.state.val} onChange={this.handleChange}/>
          <div style={errorStyle}>Please enter only valid email addresses.</div>
        </div>
    );
  }
}

class Password1 extends React.Component {
  constructor(props) {
    super();
    // This is super kludgey but I've been working on this and the back-end assignment for hours now and I'm tired so
    // I'm not going to figure out how to do it correctly. This allows the Password2 component to access the value of
    // this component in order to compare passwords to make sure they match.
    window.Password1 = this;
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
    // validate value
    const numberRegex = /\d/;
    const specialCharRegex = /[*]|[#]|[@]|[&]/;
    if (this.state.val.length > 0 && (this.state.val.length < 8 || !numberRegex.test(this.state.val) || !specialCharRegex.test(this.state.val))) {
      style.backgroundColor = 'pink';
      errorStyle = { color: "red", fontWeight: "bold" };
    }
    return (
        <div>
          Password <input style={style} type="text" value={this.state.val} onChange={this.handleChange}/>
          <div style={errorStyle}>Passwords must be at least 8 characters and contain at least one number and special character (#@&*).</div>
        </div>
    );
  }
}

class Password2 extends React.Component {
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
    // validate value
    // I'm taking a shortcut here. I'm assuming that the first password box is filled in first. If the user edits them
    // out of order, the user experience won't be very good.
    if (this.state.val.length > 0 && this.state.val !== window.Password1.state.val) {
      style.backgroundColor = 'pink';
      errorStyle = { color: "red", fontWeight: "bold" };
    }
    return (
        <div>
          Password (again) <input style={style} type="text" value={this.state.val} onChange={this.handleChange}/>
          <div style={errorStyle}>Passwords must match.</div>
        </div>
    );
  }
}

class NewAccountPage extends React.Component {

  constructor(props) {
    super();
  }

  renderUsername() {
    return <UserName name="investmentAmount" onChange={this.handleChildChange}/>;
  }
  renderPassword1() {
    return <Password1 name="investmentType" onChange={this.handleChildChange}/>;
  }
  renderPassword2() {
    return <Password2 name="netWorth" onChange={this.handleChildChange}/>;
  }

  handleSubmit() {
    debugger;
    // I don't know why this is undefined here. It isn't undefined for my other handler functions.
    let self = this ? this : window.landingPage;
    self.props.history.push("/accountPage");

    console.log(self);
  }

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
              {this.renderPassword1()}
              {this.renderPassword2()}
            </div>
          </div>
          <div style={style}>
            <button type="button" onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
    );
  }
}

export default NewAccountPage;
