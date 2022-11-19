import React, { useState } from "react";
// import StatusButton from "../../core/StatusButton";
import Icons from "../../../assets/Icons";

const tableHead = [
  "Full Name",
  "Username",
  "Email",
  "Location",
  "Phone",
  "Date Of Birth (Age)",
  "Gender",
];

const dataHead = [
  // "first",
  // "name.last",
  "gender",
  "email",
  // "dob.date",
  "cell",
  "phone",
  // "location.city",
];

function Orders() {
  const [search, setSearch] = useState("");

  const [info, setInfo] = React.useState([]);

  React.useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results);
        setInfo(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filterData = (data) => {
    return data.filter((item) =>
      dataHead.some((key) => item[key].toLowerCase().includes(search))
    );
  };

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
            placeholder="Search email, phone, gender "
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

        <table className="m-tableInfo__table w-100 b-1 border-10">
          <thead>
            <tr className="a-tableHead__text bgcolor-bg-secondary border-6 ">
              {tableHead.map((head) => {
                return <th className="w-16 text-center px-1 py-1">{head}</th>;
              })}
            </tr>
          </thead>

          <tbody>
            {filterData(info).map((record) => {
              return (
                <tr key={record.id} className="items-center bb-1">
                  <td className=" w-16 px-1 py-2 text-center">
                    {record.name.title}. {record.name.first} {record.name.last}
                  </td>

                  <td className="px-1 text-center">{record.login.username}</td>

                  <td className="px-1 text-center">{record.email}</td>

                  <td className="px-1 text-center">
                    <p>{record.location.state}</p>
                    <span className="fs-small color-text-secondary">
                      {record.location.city}
                    </span>
                  </td>

                  <td className=" px-1 text-center">
                    <p>{record.phone}</p>
                    <span className="fs-small color-text-secondary">
                      {record.cell}
                    </span>
                  </td>

                  <td className=" px-1 text-center">
                    {record.dob.date} ({record.dob.age})
                  </td>

                  <td className=" px-1 text-center">
                    {record.gender}
                    {/* <StatusButton status={record.status} /> */}
                  </td>
                </tr>
              );
            })}

            {/* {filterData(info).map((record) => {
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
            })} */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Orders;
