"use babel";
import * as React from "react";
import { VM } from "vm2";

export default class RunJS extends React.Component {
  render() {
    let evaluatedCode = "Loading...";
    try {
      const vm = new VM();
      evaluatedCode = vm.run(this.props.children[0] + ";");
    } catch (err) {
      evaluatedCode = "ERROR: " + err.toString();
    }

    return React.createElement(
      "div",
      {
        className: "rendered-js-code",
      },
      evaluatedCode
    );
  }
}
