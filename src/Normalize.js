import React from "react";
// import normalize from "normalize-json-api-response";

function Normalize() {
  const [apiData, setApiData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((data) => setApiData(data.results))
      .catch((err) => console.log(err));
  }, []);

  console.log(apiData);

  return <div>Normalize</div>;
}

export default Normalize;
