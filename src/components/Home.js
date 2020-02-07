import React, { useState, useRef } from "react";
import Item from "./Item";
import { observer } from "mobx-react";

const initialFormValues = {
  name: "",
  quantity: "",
  price: ""
};

const Home = ({ invoice }) => {
  const [formData, setFormData] = useState(initialFormValues);
  const nameRef = useRef(null);
  const handleSubmit = e => {
    e.preventDefault();
    const fromatData = {
      name: formData.name,
      quantity: parseInt(formData.quantity, 10),
      price: parseFloat(formData.price)
    };
    invoice.itemList.add(fromatData);
    setFormData(initialFormValues);
    nameRef.current.focus();
  };

  const handleChange = ({ target: { name, value }, reset }) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>{invoice.status()}</h1>
      {!invoice.is_paid && <button onClick={invoice.markPaid}>Pay</button>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            onChange={handleChange}
            name="name"
            ref={nameRef}
            value={formData.name}
          />
        </label>
        <label htmlFor="quantity">
          Quantity
          <input
            type="number"
            onChange={handleChange}
            name="quantity"
            value={formData.quantity}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="float"
            onChange={handleChange}
            name="price"
            value={formData.price}
          />
        </label>
        <button type="submit">Add</button>
      </form>
      <h2>Total is ${invoice.itemList.total().toFixed(2)}</h2>
      <ul>
        {invoice.itemList.items.map((item, idx) => (
          <Item item={item} key={idx} />
        ))}
      </ul>
    </div>
  );
};

export default observer(Home);
