import "../src/styles/Table.css";
import React, { useState } from "react";


const SortableTable = () => {
  const [employees, setEmployees] = useState([
    { id: 101, name: "John Doe", salary: 50000 },
    { id: 102, name: "Alice Smith", salary: 60000 },
    { id: 103, name: "Bob Johnson", salary: 55000 },
    { id: 104, name: "Charlie Brown", salary: 70000 },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortTable = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sorted = [...employees].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setEmployees(sorted);
    setSortConfig({ key, direction });
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th onClick={() => sortTable("id")}>ID</th>
            <th onClick={() => sortTable("name")}>Name</th>
            <th onClick={() => sortTable("salary")}>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortableTable;
