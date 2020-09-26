"use babel";
import * as React from "react";
import { VM } from "vm2";

export default class RunJS extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.webviewInitialized) return;

    const webview = document.createElement("webview");
    document.querySelector(".rendered-js-code").appendChild(webview);
    webview.setAttribute("src", "data:text/plain,Loading...");
    webview.addEventListener("dom-ready", async () => {
      const evaluatedCode = await webview.executeJavaScript(
        this.props.children[0]
      );
      console.log("dom ready, evaluated code", evaluatedCode);
      webview.setAttribute("src", `data:text/plain,${evaluatedCode}`);
    });

    this.webviewInitialized = true;
  }

  render() {
    return React.createElement("div", {
      className: "rendered-js-code",
    });
  }
}
