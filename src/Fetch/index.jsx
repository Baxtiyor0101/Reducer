import React, { useState, useEffect } from "react";

function Fetch() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  //   console.log(data);

  return (
    <div>
      {data.map((val) => (
        <div key={val.id}>
          <p>{val.id}</p>
          <p>{val.title}</p>
          <h1>{val.userId}</h1>
          <img src={val.thumbnailUrl} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Fetch;
