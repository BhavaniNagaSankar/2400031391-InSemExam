import React from "react";
import SortableTable from "../components/SortableTable";
import "./styles/Table.css";

function App() {
  return (
    <div className="app-container">
      <h1>Employee Sortable Table</h1>
      <SortableTable />
    </div>
  );
}

export default App;
