import React from "react";
import { observer } from "mobx-react";

const Home = ({ invoice }) => {
  return (
    <div>
      <h1>{invoice.status()}</h1>
      {!invoice.is_paid && <button onClick={invoice.markPaid}>Pay</button>}
    </div>
  );
};

export default observer(Home);
