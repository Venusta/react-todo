/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
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
        <label>
        Todo:
          <input
            type="text"
            name="name"
            value={value}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
