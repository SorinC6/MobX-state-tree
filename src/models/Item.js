import { types } from "mobx-state-tree";

const Item = types.model("Item", {
  quantity: types.number,
  price: types.number,
  name: types.string
});

export default Item;
