import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

describe("App", () => {
  it("renders the correct text", () => {
    const wrapper = shallow(<App name="james" />);
    expect(wrapper.text()).toEqual("Hello, james");
  });
});

export default App;
