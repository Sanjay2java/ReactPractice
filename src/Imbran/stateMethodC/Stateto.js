import React from "react";
export default class Stateto extends React.Component {
  constructor() {
    super();
    this.state = { name: "sanjay", age: "23" };
  }

  render() {
    return (
      <>
        <h1>
          Hi {this.state.name} {this.state.age}
          <button
            onClick={() => {
              this.setState({ name: "Naveen", age: "24" });
            }}
          >
            change Next
          </button>
        </h1>
      </>
    );
  }
}
