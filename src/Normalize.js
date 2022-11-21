import React from "react";

function Normalize() {
  const [results, setResults] = React.useState([]);
  const [pagination, setPagination] = React.useState({});

  React.useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((data) => {
        const pagination = data.info;
        const results = data.results.map((item) => {
          return {
            username: `${item.login.username}`,
            email: item.email,
            name: `${item.name.title} ${item.name.first} ${item.name.last}`,
            location: `${item.location.city} - ${item.location.street.name}`,
            dob: item.dob.date,
            gender: item.gender,
            phone: item.phone,
          };
        });

        return {
          pagination,
          results,
        };
      })
      .then(({ pagination, results }) => {
        setPagination(pagination);
        setResults(results);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(results);
  console.log(pagination);

  return <div>Normalize</div>;
}

export default Normalize;
