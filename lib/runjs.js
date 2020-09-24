"use babel";

import RunJS from "./runjs-component";
import { markdownRenderer } from "inkdrop";

module.exports = {
  activate() {
    if (markdownRenderer) {
      markdownRenderer.remarkCodeComponents.runjs = RunJS;
    }
  },

  deactivate() {
    if (markdownRenderer) {
      markdownRenderer.remarkCodeComponents.runjs = null;
    }
  },
};
