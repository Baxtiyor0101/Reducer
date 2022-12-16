import React, { createContext, useState } from "react";
export const StudentContext = createContext([]);
function StudentCom({ children }) {
  const [data, setData] = useState([
    { id: 1, name: "Toshmat ", surname: "Toshmatov" },
    { id: 2, name: "Gulmat ", surname: "Gulmatov" },
    { id: 3, name: "Holmat ", surname: "Holmatov" },
    { id: 4, name: "Eshmat", surname: "Toshmatov" },
    { id: 5, name: "Yolmat", surname: "Yolmatov" },
    { id: 6, name: "Toshmat ", surname: "Toshmatov" },
  ]);
  return (
    <StudentContext.Provider value={[data, setData]}>
      {children}
    </StudentContext.Provider>
  );
}

export default StudentCom;

// create
// send
// use
