import React from "react";

function DataFetch() {
  const [info, setInfo] = React.useState([]);

  React.useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => {
        console.log(response);
        setInfo(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(info);

  return (
    <>
      <ul>
        {info.map((data) => (
          <li key={data.id}>{data.gender}</li>
        ))}
      </ul>
    </>
  );
}

export default DataFetch;
