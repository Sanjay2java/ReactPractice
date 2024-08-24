import React from "react"; //React import

export default class StateMethod extends React.Component {
  constructor() {
    // Object creation
    super(); // inside constructor Super() must have
    this.state = { Name: "Sanjay" }; // state initialized
  }
  render() {
    console.log("Rendered");
    return (
      <>
        <h1>Class component with state Method</h1>
        <h2>{this.state.Name}</h2>
        <button
          onClick={() => {
            this.setState({ Name: "React Course" });
          }}
        >
          ChangeName
        </button>
      </>
    );
  }
}
