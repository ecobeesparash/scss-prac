import React from "react";
import Orders from "./Orders";
import Head from "./Head";

function OrderPage() {
  return (
    <div className="o-orderPage__div d-flex direction-column">
      <Head/>
      <Orders />
    </div>
  );
}

export default OrderPage;
