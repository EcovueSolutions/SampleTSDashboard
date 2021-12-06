import Composite = require("ojs/ojcomposite");
import * as view from "text!./pop-up-table-view.html";
import viewModel from "./pop-up-table-viewModel";
import * as metadata from "text!./component.json";
import "css!./pop-up-table-styles.css";

Composite.register("mytasks-pop-up-table", {
  view: view,
  viewModel: viewModel,
  metadata: JSON.parse(metadata)
});

declare global {
  namespace preact.JSX {
    interface IntrinsicElements {
     "mytasks-pop-up-table": any;
    }
  }
}