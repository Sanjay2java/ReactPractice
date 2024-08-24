import React from "react";

export default class Set extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor",
    };
  }

  changeMethod() {
    this.setState({
      message: "Thankss for subscribing",
    });
  }
  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button
          onClick={() => {
            this.changeMethod();
          }}
        >
          Subscribe
        </button>
      </>
    );
  }
}
