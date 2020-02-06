import { types } from "mobx-state-tree";
import Item from "./Item";

const ItemList = types.model("ItemList", {
  items: types.array(Item)
});

export default ItemList;
