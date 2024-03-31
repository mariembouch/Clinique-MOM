import React, { useState } from "react";
import TableRows from "./TableRows";
import "./AddDeleteTableRows.css";

function AddDeleteTableRows() {
  const [rowsData, setRowsData] = useState([]);

  const addTableRows = () => {
    const rowsInput = {
      fullName: "",
      emailAddress: "",
      salary: ""
    };
    setRowsData([...rowsData, rowsInput]);
  };

  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-8 text-center"> {/* Added 'text-center' class */}
          <table className="table">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Salary</th>
                <th>
                  <button className="btn btn-outline-success" onClick={addTableRows}>
                    +
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AddDeleteTableRows;
