import React, { Component } from "react";
import List from "./List";
import InputForm from "./InputForm";

class Todos extends Component {
  state = {
    value: "testtt",
    items: ["item 1", "item 2"],
  };

  handleInputFormChange = (value) => {
    this.setState({
      value,
    });
  }

  handleInputFormSubmit = () => {
    const { value } = this.state;
    this.setState((prevState) => ({
      items: [...prevState.items, value],
      value: "",
    }));
  }

  render() {
    const { items, value } = this.state;
    return (
      <div>
        <InputForm
          onValueChange={this.handleInputFormChange}
          value={value}
          onSubmit={this.handleInputFormSubmit}
        />
        <List items={items} />
      </div>
    );
  }
}

export default Todos;
