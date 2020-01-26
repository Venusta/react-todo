/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */

import React from "react";
import TodoItem from "./TodoItem";

const List = (props) => (
  <ol>
    {props.items.map((item, index) => <TodoItem key={`listItem${index}`} item={item} />)}
  </ol>
);
export default List;
