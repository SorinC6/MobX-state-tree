import { types } from "mobx-state-tree";
import Item from "./Item";

const ItemList = types
  .model("ItemList", {
    items: types.array(Item)
  })
  .actions(self => ({
    add(item) {
      console.log("INSIDE MST", item);
      self.items.push(item);
    }
  }));

export default ItemList;
