import { types } from "mobx-state-tree";
import ItemList from "./ItemList";

const Invoice = types
  .model("Invoice", {
    currency: types.string,
    is_paid: false,
    itemList: types.optional(ItemList, { items: [] })
  })
  .actions(self => ({
    markPaid() {
      self.is_paid = true;
    }
  }))
  .views(self => ({
    status() {
      return self.is_paid ? "paid" : "Not Paid";
    }
  }));

export default Invoice;
