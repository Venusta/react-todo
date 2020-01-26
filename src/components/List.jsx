/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */

import React from "react";

const List = (props) => (
  <ol>
    {props.items.map((item, index) => <TodoItem key={`listItem${index}`} item={item} />)}
  </ol>
);
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

export default List;
