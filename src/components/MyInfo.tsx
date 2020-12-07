import React from "react";

interface IState {
  name: string;
  age: number;
  isLoggedIn: boolean;
}

class MyInfo extends React.Component<{}, IState> {
  constructor() {
    super({});
    this.state = {
      name: "Nico",
      age: 23,
      isLoggedIn: true,
    };
  }
  render() {
    const loginState = this.state.isLoggedIn ? "in" : "out";
    this.setState({
      isLoggedIn: false,
    });

    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.age} years old</h2>
        <h2>Currently he is logged {loginState}</h2>
      </div>
    );
  }
}
export default MyInfo;
