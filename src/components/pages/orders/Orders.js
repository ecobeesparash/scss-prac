import React from "react";
import StatusButton from "../../core/StatusButton";

function Orders() {
  return (
    <>
      <div className="o-ordersMain__div border-26 mx-2 py-2 px-3 bgcolor-bg-primary ">
        <div className="m-orderStatus__div d-flex justify-space-between items-flex-end">
          <ul className="a-orderStatusList__list d-flex gap-30 fs-regular fw-medium">
            <li>All Orders</li>

            <li className=" ">All Orders</li>

            <li>All Orders</li>

            <li className=" ">All Orders</li>
          </ul>

          <p className="fs-small color-text-secondary">Showing 8-10 out of 80 results</p>
        </div>

        <hr className="my-1 b-1" />

        <div className="m-filterBar__div bgcolor-bg-secondary border-6 p-1 mb-2 d-flex justify-space-between">
          <input className="p-1 border-10 b-1" type="search" placeholder="Search" />

          <ul className="d-flex gap-20 ">
            <button className="p-1 b-1 border-14 bgcolor-bg-primary color-text-secondary" >Filter</button>
            <button className="p-1 b-1 border-14 bgcolor-bg-primary color-text-secondary">Filter</button>
            <button className="p-1 b-1 border-14 bgcolor-bg-primary color-text-secondary">Export</button>
          </ul>
        </div>

        <table className="m-tableInfo__table w-100">
          <thead className="a-tableHead__text d-flex justify-space-between bgcolor-bg-secondary border-6 px-2 py-1">
            <th className="w-12 text-left">ORDER ID</th>
            <th className="w-20 text-left">CUSTOMER</th>
            <th className="w-20 text-left">ADDRESS</th>
            <th className="w-16 text-left">PRODUCT</th>
            <th className="w-12 text-left">Date Order</th>
            <th className="w-10 text-left">STATUS</th>
          </thead>

          <tbody className="a-tableBody__text d-flex justify-space-between items-center border-6 px-2 py-1">
            <td className="w-12 text-left">#3444</td>

            <td className="w-20 text-left">Parash Shahi</td>
           
            <td className="w-20 text-left">
              <p>Nepal</p>
              <span className="fs-small color-text-secondary">Kathmandu</span>
            </td>

            <td className="w-16 text-left">
              <p>Nepal</p>
              <span className="fs-small color-text-secondary">Kathmandu</span>
            </td>
            
            <td className="w-12 text-left">01/11/2121</td>
            
            <td className="w-10 text-left">
              <StatusButton status="Delivered"/>
            </td>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Orders;
