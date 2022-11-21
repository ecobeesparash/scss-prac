import React from "react";

function SortTable() {
  const [apiData, setApiData] = React.useState([]);
  const [order, setOrder] = React.useState("asc");

  React.useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((data) => {
        setApiData(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(apiData);

  const sortData = (column) => {
    if (order === "asc") {
      const sorted = [...apiData].sort((a, b) =>
        a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1
      );
      setApiData(sorted);
      setOrder("desc");
    }
    if (order === "desc") {
      const sorted = [...apiData].sort((a, b) =>
        a[column].toLowerCase() < b[column].toLowerCase() ? 1 : -1
      );
      setApiData(sorted);
      setOrder("asc");
    }
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th onClick={() => sortData("email")}>Email</th>
            <th onClick={() => sortData("gender")}>Gender</th>
            <th onClick={() => sortData("phone")}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((record, index) => (
            <tr key={index}>
              <td>{record.email}</td>
              <td>{record.gender}</td>
              <td>{record.cell}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default SortTable;
