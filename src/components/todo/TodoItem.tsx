import React from "react";

interface IProperties {
  item: {
    id: number;
    job: string;
    completed: boolean;
  };
}

interface IState {
  isCompleted: boolean;
}

class TodoItem extends React.Component<IProperties, IState> {
  constructor(props: IProperties) {
    super(props);

    this.state = {
      isCompleted: this.props.item.completed,
    };
  }
  render() {
    let styles = this.state.isCompleted
      ? {
          color: "gray",
          textDecoration: "line-through",
        }
      : undefined;

    return (
      <div className="TodoItem">
        <input
          type="checkbox"
          id="checkbox1"
          checked={this.state.isCompleted}
          onChange={() =>
            this.setState({ isCompleted: !this.state.isCompleted })
          }
        />
        <p style={styles}>{this.props.item.job} </p>
      </div>
    );
  }
}

export default TodoItem;
