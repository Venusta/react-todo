/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import Checkbox from "./Checkbox";

class TodoItem extends Component {
  state = {
    isSelected: false,
  }

  handleCheckboxChange = (event) => {
    console.log(event.target);
    this.setState((prevState) => ({
      isSelected: !prevState.isSelected,
    }));
  }

  render() {
    const { isSelected } = this.state;
    const { item } = this.props;
    return (
      <li style={{ textDecoration: isSelected ? "line-through" : "none" }}>
        <Checkbox isSelected={isSelected} onCheckboxChange={this.handleCheckboxChange} />
        {item}
      </li>
    );
  }
}

export default TodoItem;
