/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { Component } from "react";
import List from "./List";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      items: ["test 3", "test 4"],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value.toUpperCase(),
    });
  }

  handleSubmit(event) {
    const { value, items } = this.state;
    // pass it to the list?
    this.setState({
      value: "",
      items: [...items, value],
    });
    event.preventDefault();
  }

  render() {
    const { value, items } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
          Todo:
            <input type="text" name="name" value={value} onChange={this.handleChange} />
          </label>
          <input type="button" value="Submit" onClick={this.handleSubmit} />
        </form>
        <List items={items} />
      </div>
    );
  }
}

export default Todos;
