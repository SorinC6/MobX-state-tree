import React from "react";

const Item = ({ item }) => {
  return (
    <li>
      {item.name}: {item.quantity} * ${item.price.toFixed(2)} = $
      {item.total().toFixed(2)}
    </li>
  );
};

export default Item;
