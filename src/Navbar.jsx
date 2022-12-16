import React, { useContext } from "react";
import { StudentContext } from "./context";

function Navbar() {
  const [datas, setDates] = useContext(StudentContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "coral",
      }}
    >
      <h3>Students {datas.length}</h3>
      <h4>Main</h4>
      <h4>Body</h4>
      <h4>Contact</h4>
      <h4>Form</h4>
      <h4>Product</h4>
    </div>
  );
}

export default Navbar;
