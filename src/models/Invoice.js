import { types } from "mobx-state-tree";

const Invoice = types
  .model("Invoice", {
    currency: types.string,
    is_paid: false
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
