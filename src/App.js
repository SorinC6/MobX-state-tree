import React from "react";
import "./App.css";
import Invoice from "./models/Invoice";
import Home from "./components/Home";

const invoice = Invoice.create({ currency: "RO" });

function App() {
  return (
    <div className="App">
      <Home invoice={invoice} />
    </div>
  );
}

export default App;
