import React, { useState } from "react";
import StatusButton from "../../core/StatusButton";
import Icons from "../../../assets/Icons";
import Data from "../../../assets/data.json";

const tableHead = [
  "ORDER ID",
  "CUSTOMER",
  "ADDRESS",
  "PRODUCT",
  "Date Order",
  "STATUS",
];

const dataHead = [
  "id",
  "customer",
  "country",
  "address",
  "product",
  "detail",
  "date",
  "status",
];

function Orders() {
  const [search, setSearch] = useState("");

  const filterData = (data) => {
    return data.filter((item) =>
      dataHead.some((key) => item[key].toLowerCase().includes(search))
    );
  };
  // console.log(search);
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

          <p className="fs-small color-text-secondary">
            Showing 8-10 out of 80 results
          </p>
        </div>

        <hr className="my-1 b-1" />

        <form className="m-filterBar__form bgcolor-bg-secondary border-6 p-1 mb-2 d-flex justify-space-between">
          <input
            className="p-1 border-10 b-1 w-50"
            type="search"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />

          <ul className="a-filterBtns__list d-flex gap-20 w-30 justify-flex-end">
            <div className="b-1 border-14 w-30 bgcolor-bg-primary color-text-secondary d-flex items-center">
              <button className="w-50 b-none border-tl-14 border-bl-14 fs-medium bgcolor-bg-primary color-text-secondary d-flex justify-center">
                {Icons.ListIcon}
              </button>
              <button className="w-50 b-none border-tr-14 border-br-14 fs-medium bgcolor-bg-primary color-text-secondary d-flex justify-center">
                {Icons.GridIcon}{" "}
              </button>
            </div>

            <button className=" b-1 px-1 border-14 bgcolor-bg-primary color-text-secondary fs-regular d-flex items-center">
              {Icons.FilterIcon} <span className="pl-1">Filter</span>
            </button>

            <button className=" b-1 px-1 border-14 bgcolor-bg-primary color-text-secondary fs-regular d-flex items-center">
              {Icons.ExportIcon} <span className="pl-1">Export</span>
            </button>
          </ul>
        </form>

        <table className="m-tableInfo__table w-100">
          <thead>
            <tr className="a-tableHead__text d-flex justify-space-between bgcolor-bg-secondary border-6 px-2 py-1">
              {tableHead.map((head) => {
                return <th className="w-16 text-left">{head}</th>;
              })}
            </tr>
          </thead>

          <tbody className="a-tableBody__text">
            {filterData(Data).map((record) => {
              return (
                <tr
                  key={record.id}
                  className="d-flex justify-space-between items-center border-6 px-2 py-1 bb-1"
                >
                  <td className="w-16 text-left">{record.id}</td>

                  <td className="w-16 text-left">{record.customer}</td>

                  <td className="w-16 text-left">
                    <p>{record.country}</p>
                    <span className="fs-small color-text-secondary">
                      {record.address}
                    </span>
                  </td>

                  <td className="w-16 text-left">
                    <p>{record.product}</p>
                    <span className="fs-small color-text-secondary">
                      {record.detail}
                    </span>
                  </td>

                  <td className="w-16 text-left">{record.date}</td>

                  <td className="w-16 text-left">
                    <StatusButton status={record.status} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Orders;
