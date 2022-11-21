import React, { useState } from "react";
// import StatusButton from "../../core/StatusButton";
import Icons from "../../../assets/Icons";
import ReactHtmlTableToExcel from "react-html-table-to-excel";

const dataHead = ["gender", "email", "cell", "phone"];

function Orders() {
  const [search, setSearch] = useState("");

  //fetch api data
  const [info, setInfo] = React.useState([]);

  React.useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((data) => {
        setInfo(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [order, setOrder] = React.useState("asc");

  const sortData = (column) => {
    if (order === "asc") {
      const sorted = [...info].sort((a, b) =>
        a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1
      );
      setInfo(sorted);
      setOrder("desc");
    }
    if (order === "desc") {
      const sorted = [...info].sort((a, b) =>
        a[column].toLowerCase() < b[column].toLowerCase() ? 1 : -1
      );
      setInfo(sorted);
      setOrder("asc");
    }
  };

  const filterData = (data) => {
    return data.filter((item) =>
      dataHead.some((key) =>
        // console.log(key)
        item[key].toLowerCase().includes(search)
      )
    );
  };

  return (
    <>
      <div className="o-ordersMain__div border-26 mx-2 py-2 px-3 bgcolor-bg-primary ">
        <div className="m-orderStatus__div d-flex justify-space-between items-flex-end">
          <ul className="a-orderStatusList__list d-flex gap-30 fs-regular fw-medium">
            <li>All Users</li>
          </ul>

          <p className="fs-small color-text-secondary">
            Showing {info.length} results
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
                {Icons.GridIcon}
              </button>
            </div>

            {/* <button className=" b-1 px-1 border-14 bgcolor-bg-primary color-text-secondary fs-regular d-flex items-center">
              {Icons.FilterIcon} <span className="pl-1">Filter</span>
            </button> */}

            <ReactHtmlTableToExcel
              id="table-xls-button"
              className="download-table-xls-button b-1 px-1 border-14 bgcolor-bg-primary color-text-secondary fs-medium d-flex items-center"
              table="customer-table"
              filename="customers-details"
              sheet="Customers-details"
              buttonText={Icons.ExportIcon}
            />

            {/* <button className=" b-1 px-1 border-14 bgcolor-bg-primary color-text-secondary fs-regular d-flex items-center">
              {Icons.ExportIcon} <span className="pl-1">Export</span>
            </button> */}
          </ul>
        </form>

        <table
          className="m-tableInfo__table w-100 border-10"
          id="customer-table"
        >
          <thead>
            <tr className="a-tableHead__text bgcolor-bg-secondary border-6 ">
              <th
                onClick={() => sortData("fname")}
                className="w-16 text-center px-1 py-1"
              >
                Full Name
              </th>
              <th
                // onClick={() => sortData("username")}
                className="w-16 text-center px-1 py-1"
              >
                Username
              </th>
              <th
                onClick={() => sortData("email")}
                className="w-16 text-center px-1 py-1"
              >
                Email
              </th>
              <th
                // onClick={() => sortData("location")}
                className="w-16 text-center px-1 py-1"
              >
                Location
              </th>
              <th
                onClick={() => sortData("phone")}
                className="w-16 text-center px-1 py-1"
              >
                Phone
              </th>
              <th
                // onClick={() => sortData("dob")}
                className="w-16 text-center px-1 py-1"
              >
                Date of birth
              </th>
              <th
                onClick={() => sortData("gender")}
                className="w-16 text-center px-1 py-1"
              >
                Gender
              </th>
            </tr>
          </thead>

          <tbody>
            {filterData(info).map((record, index) => {
              return (
                <tr key={index} className="items-center bb-1">
                  <td className=" w-16 px-1 py-2 text-center bb-1">
                    {record.name.title}. {record.name.first} {record.name.last}
                  </td>

                  <td className="px-1 text-center bb-1">
                    {record.login.username}
                  </td>

                  <td className="px-1 text-center bb-1">{record.email}</td>

                  <td className="px-1 text-center bb-1">
                    <p>{record.location.street.name}</p>
                    <span className="fs-small color-text-secondary">
                      {record.location.city}
                    </span>
                  </td>

                  <td className=" px-1 text-center bb-1">
                    <p>{record.phone}</p>
                    <span className="fs-small color-text-secondary">
                      {record.cell}
                    </span>
                  </td>

                  <td className=" px-1 text-center bb-1">
                    {record.dob.date} ({record.dob.age})
                  </td>

                  <td className=" px-1 text-center bb-1">
                    {record.gender}
                    {/* <StatusButton status={record.status} /> */}
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
