import React from "react";

interface IState {
  isLoggedIn: boolean;
}

class LoginCheck extends React.Component<{}, IState> {
  constructor() {
    super({});
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    let loginState = this.state.isLoggedIn ? "in" : "out";
    let loginButtonText = this.state.isLoggedIn ? "Log out" : "Log in";

    return (
      <div>
        <input
          type="Button"
          onClick={() => this.setState({ isLoggedIn: !this.state.isLoggedIn })}
          value={loginButtonText}
        />
        <p>User is currently logged {loginState} </p>
      </div>
    );
  }
}

export default LoginCheck;
