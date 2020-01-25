import React from "react";
import ReactDOM from "react-dom";
import Todos from "./components/Todos";

function Root() {
  return (
    <div>
      <h1>Todos:</h1>
      <Todos />
    </div>
  );
}

// Render the Root element into the DOM
ReactDOM.render(<Root />, document.getElementById("root"));
