import React, { useState, useContext } from "react";
import { StudentContext } from "./context";

function Body() {
  const [data, setData] = useContext(StudentContext);
  console.log(data);
  const onDelete = (ids) => {
    let res = data.filter((val) => ids !== val.id);
    setData(res);
  };

  return (
    <div>
      <h1>Students:{data.length}</h1>
      <table border={"1"}>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>surname</th>
          <th>action</th>
        </tr>
        {data.map((val) => (
          <tr key={val.id}>
            <td>{val.id}</td>
            <td>{val.name}</td>
            <td>{val.surname}</td>
            <td>
              <button onClick={() => onDelete(val.id)}>delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Body;
