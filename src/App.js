import React from "react";
import "./App.css";
import Invoice from "./models/Invoice";
import Home from "./components/Home";
import { onPatch } from "mobx-state-tree";
import makeInspectable from "mobx-devtools-mst";

const invoice = Invoice.create({ currency: "RO" });

onPatch(invoice, patch => {
  console.log(patch);
});
makeInspectable(invoice);

function App() {
  return (
    <div className="App">
      <Home invoice={invoice} />
    </div>
  );
}

export default App;
