// Import react and react dom libraries
import React from "react";
import ReactDom from "react-dom";
// For real time reloading
if (module.hot) {
  module.hot.accept();
}
function getButtonText() {
  return "Click me !";
}
function getCurrentTime() {
  return new Date().toLocaleDateString();
}
// Create a react component
const App = () => {
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name{" "}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {getButtonText()}
      </button>
      <hr />
      <h3>Current Time</h3>
      <label>{getCurrentTime()}</label>
    </div>
  );
};

// Take the component and show it on DOM
ReactDom.render(<App />, document.querySelector("#root"));
