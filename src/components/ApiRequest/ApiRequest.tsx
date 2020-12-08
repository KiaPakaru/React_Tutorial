import React from "react";

interface IState {
  character: {
    name: string;
    gender: string;
    height: number;
    mass: number;
    eye_color: string;
  };
  isLoading: boolean;
}

class ApiRequest extends React.Component<{}, IState> {
  constructor() {
    super({});

    this.state = {
      character: {
        name: "",
        gender: "",
        height: 0,
        mass: 0,
        eye_color: "",
      },
      isLoading: true,
    };
  }

  componentDidMount() {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = "https://swapi.dev/api/people/1";
    const response = fetch(proxyUrl + targetUrl, {
      method: "GET",
      headers: {
        Origin: "https://swapi.dev",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          character: data,
          isLoading: false,
        });
      });
  }

  render() {
    let characterInfo = this.state.isLoading ? (
      <div>
        <h1 className="WhiteFont">Loading...</h1>
      </div>
    ) : (
      <div className="WhiteFont">
        <h1>{this.state.character.name}</h1>
        <p>Gender: {this.state.character.gender}</p>
        <p>Height: {this.state.character.height}cm</p>
        <p>Mass: {this.state.character.mass}kg</p>
        <p>Eye color: {this.state.character.eye_color}</p>
      </div>
    );

    return (
      <div>
        {characterInfo}
        <p></p>
      </div>
    );
  }
}

export default ApiRequest;
