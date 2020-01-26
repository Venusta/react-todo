/* eslint-disable react/prop-types */
import React from "react";
// TODO this shit http://react.tips/checkboxes-in-react-16/
const Checkbox = ({ isSelected, onCheckboxChange }) => (
  <input type="checkbox" checked={isSelected} onChange={onCheckboxChange} />
);

export default Checkbox;
