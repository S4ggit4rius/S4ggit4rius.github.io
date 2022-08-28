import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Row from "./components/db-row.component";

import "./App.css";

function App() {
  const [rows, setRows] = useState([]);

  const getRows = async () => {
    const rows = await axios.get("/users");

    setRows(rows.data.users);

    //console.log(rows);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getRows}>Get rows</button>
        {rows.length > 0 &&
          rows.map((row, index) => (
            <Row
              id={row.id}
              name={row.name}
              surname={row.surname}
              email={row.email}
              key={index}
            />
          ))}
      </header>
    </div>
  );
}

export default App;