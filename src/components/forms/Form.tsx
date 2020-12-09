import React, { FormEvent } from "react";

interface IState {
  firstName: string;
  lastName: string;
  textArea: string;
  isChecked: boolean;
  gender: string;
  animal: string;
}

class Form extends React.Component<{}, IState> {
  constructor() {
    super({});
    this.state = {
      firstName: "",
      lastName: "",
      isChecked: false,
      textArea: "",
      gender: "",
      animal: "Cat",
    };
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          placeholder="First Name"
          onChange={(e) =>
            this.setState({
              firstName: e.currentTarget.value,
            })
          }
        />
        <br />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          placeholder="Last Name"
          onChange={(e) =>
            this.setState({
              lastName: e.currentTarget.value,
            })
          }
        />
        <br />
        <textarea
          placeholder="This is a placeholder"
          value={this.state.textArea}
          onChange={(e) =>
            this.setState({
              textArea: e.currentTarget.value,
            })
          }
        />
        <br />
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={(e) =>
            this.setState({
              isChecked: !this.state.isChecked,
            })
          }
        />
        <br />
        <label className="WhiteFont">
          Female
          <input
            type="radio"
            value="female"
            checked={this.state.gender == "female"}
            onChange={(e) =>
              this.setState({
                gender: e.currentTarget.value,
              })
            }
          />
        </label>
        <label className="WhiteFont">
          Male
          <input
            type="radio"
            value="male"
            checked={this.state.gender == "male"}
            onChange={(e) =>
              this.setState({
                gender: e.currentTarget.value,
              })
            }
          />
        </label>
        <br />
        <select
          value={this.state.animal}
          onChange={(e) => this.setState({ animal: e.currentTarget.value })}
        >
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="bird">Bird</option>
          <option value="yak">Yak</option>
          <option value="hannes">Hannes</option>
        </select>

        <h1 className="WhiteFont">
          <p>{this.state.firstName}</p>
          <p>{this.state.lastName}</p>
          <p>{this.state.textArea}</p>
          <p>{this.state.isChecked ? "Checked" : "Unchecked"}</p>
          <p>{this.state.gender}</p>
          <p>{this.state.animal}</p>
        </h1>
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
