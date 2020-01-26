/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React, { Component } from "react";

export default class InputForm extends Component {
  handleChange = (event) => {
    this.props.onValueChange(event.target.value.toUpperCase());
  }

  handleSubmit = (event) => {
    this.props.onSubmit();
    event.preventDefault();
  }

  render() {
    const { value } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={value}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
