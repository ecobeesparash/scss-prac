import React from "react";

function DataFetch() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((arr) => {
        setData(arr.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  return (
    <div>
      {data.map((info) => (
        <li>{info.email}</li>
      ))}
    </div>
  );
}

export default DataFetch;
