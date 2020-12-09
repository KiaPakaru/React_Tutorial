import React, { FormEvent } from "react";
import { PrimaryButton } from "@fluentui/react";

interface IState {
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
  isSubmitted: boolean;
  checkbox: boolean;
  country: string;
}

class FormPractice extends React.Component<{}, IState> {
  constructor() {
    super({});
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      isSubmitted: false,
      checkbox: false,
      country: "germany",
    };
  }

  //Works for all inputs
  handleChange = (
    e: FormEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>
  ) => {
    const { name, value, type, checked } = e.currentTarget;

    if (e.type === "submit") {
      e.preventDefault();
      this.setState<never>({ [name]: true });
      return;
    }
    //Hier kommen die inputs. Eventuell möchte man die Submit-Variable wieder auf false setzen etc.
    if (type === "checkbox") {
      this.setState({ [name]: checked, isSubmitted: false } as Pick<
        IState,
        keyof IState
      >);
      return;
    }

    this.setState({ [name]: value, isSubmitted: false } as Pick<
      IState,
      keyof IState
    >);
  };

  render() {
    let infoPanel = this.state.isSubmitted ? (
      <div>
        <h1>Information:</h1>
        <p>
          Name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Age: {this.state.age}</p>
        <p>Gender: {this.state.gender}</p>
        <p>Country: {this.state.country}</p>
      </div>
    ) : (
      <h1>Not submitted yet</h1>
    );

    return (
      <div className="WhiteFont">
        <form name="isSubmitted" onSubmit={this.handleChange}>
          <h1>Enter information Below:</h1>
          <input
            type="text"
            value={this.state.firstName}
            placeholder="First Name"
            name="firstName"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            value={this.state.lastName}
            placeholder="Last Name"
            name="lastName"
            onChange={this.handleChange}
          />
          <input
            type="checkbox"
            checked={this.state.checkbox}
            name="checkbox"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            value={this.state.age}
            placeholder="Age"
            name="age"
            onChange={(e) => {
              this.setState({
                isSubmitted: false,
                age: e.currentTarget.value,
              });
            }}
          />
          <br />
          <label>
            <input
              type="radio"
              value="male"
              name="gender"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="female"
              checked={this.state.gender === "female"}
              name="gender"
              onChange={this.handleChange}
            />
            Female
          </label>
          <br />
          <select
            name="country"
            value={this.state.country}
            onChange={(e) =>
              this.setState({
                country: e.currentTarget.value,
                isSubmitted: false,
              })
            }
          >
            <option value="germany">Deutschland</option>
            <option value="england">England</option>
            <option value="turkey">Türkei</option>
          </select>
          <br />
          <br />
          <PrimaryButton>Submit</PrimaryButton>
        </form>
        <hr />
        {infoPanel}
      </div>
    );
  }
}
export default FormPractice;
