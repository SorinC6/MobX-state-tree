import React from "react";

const Home = ({ invoice }) => {
  //console.log(invoice.currency);
  return (
    <div>
      <h1>{invoice.status()}</h1>
    </div>
  );
};

export default Home;
