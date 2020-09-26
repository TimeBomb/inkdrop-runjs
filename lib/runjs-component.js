"use babel";
import * as React from "react";
import { VM } from "vm2";

export default class RunJS extends React.Component {
  constructor(props) {
    super(props);
    this.webviewRef = React.createRef();
  }

  componentDidMount() {
    if (this.webviewRef.current) {
      console.log("didmount current exists", this.webviewRef.current);
      this.webviewRef.current.addEventListener("did-finish-load", () => {
        console.log(
          "exec javsascript on did-finish-loadin",
          this.webviewRef.current.executeJavascript
        );
      });
    }
  }

  render() {
    if (this.webviewRef.current) {
      console.log("didmount current exists", this.webviewRef.current);
      this.webviewRef.current.addEventListener("did-finish-load", () =>
        console.log("did finish load called in render")
      );
    }
    let evaluatedCode = "Loading...";
    try {
      // const vm = new VM();
      // evaluatedCode = vm.run(this.props.children[0] + ";");
    } catch (err) {
      evaluatedCode = "ERROR: " + err.toString();
    }

    return React.createElement(
      "webview",
      {
        className: "rendered-js-code",
        ref: this.webviewRef,
      },
      evaluatedCode
    );
  }
}
