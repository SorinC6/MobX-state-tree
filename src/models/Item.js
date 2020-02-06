import { types } from "mobx-state-tree";

const Item = types
  .model("Item", {
    quantity: types.number,
    price: types.number,
    name: types.string
  })
  .views(self => ({
    total() {
      return self.quantity * self.price;
    }
  }));

export default Item;
