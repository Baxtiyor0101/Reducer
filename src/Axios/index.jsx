import axios from "axios";
import React, { useEffect, useState } from "react";

function Axios() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      setState(res.data)
    );
  }, []);
  console.log(state);
  return (
    <div>
      {state.map((val) => (
        <div>
          <h1>{val.id}</h1>
          <h2>{val.name}</h2>
          <h3>{val.phone}</h3>
          <table border={1}>
            <tr>
              <th>city</th>
              <th>street</th>
              <th>zipcode</th>
            </tr>
            <tr>
              <td>{val.address.city}</td>
              <td>{val.address.street}</td>
              <td>{val.address.zipcode}</td>
            </tr>
          </table>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Axios;
