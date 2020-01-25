/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */

import React from "react";

const List = (props) => (
  <ul>
    {props.items.map((item, index) => <TodoItem key={`listItem${index}`} item={item} />)}
  </ul>
);

const TodoItem = (props) => (
  <li>{props.item}</li>
);

export default List;
