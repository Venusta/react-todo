import React, { Component } from "react";
import List from "./List";
import InputForm from "./InputForm";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "testtt",
      items: ["KANKER", "KUT"],
    };
  }

  handleInputFormChange = (FUCK) => {
    this.setState({
      value: FUCK,
    });
  }

  handleInputFormSubmit = () => {
    const { items, value } = this.state;
    this.setState({
      items: [...items, value],
      value: "",
    });
  }

  render() {
    const { items, value } = this.state;
    return (
      <div>
        <InputForm
          onValueChange={this.handleInputFormChange}
          value={value}
          onCancer={this.handleInputFormSubmit}
        />
        <List items={items} />
      </div>
    );
  }
}

export default Todos;
