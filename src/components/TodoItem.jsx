/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";

const TodoItem = (props) => (
  <li>
    {<input
      name="isGoing"
      type="checkbox"
      // checked={this.state.isGoing} // TODO this shit http://react.tips/checkboxes-in-react-16/
      // onChange={this.handleInputChange}
    />}
    {props.item}
  </li>
);

export default TodoItem;
