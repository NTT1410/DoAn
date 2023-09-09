import React, { useEffect, useState } from "react";

import Apis, { endpoints } from "../../configs/Apis";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import DataTable, { createTheme } from "react-data-table-component";

const UserAdmin = () => {
  const [users, setUsers] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const loadDpm = async () => {
      let e = endpoints["users"];
      let res = await Apis.get(e);

      setUsers(res.data);
      setRecords(res.data);
    };
    loadDpm();
  }, []);

  const handleFilter = (evt) => {
    const newData = users.filter((row) => {
      return (row.firstName + " " + row.lastName)
        .toLowerCase()
        .includes(evt.target.value.toLowerCase());
    });
    setRecords(newData);
  };

  const columns = [
    {
      name: "Id",
      selector: (r) => r.id,
      sortable: true,
    },
    {
      name: "Full Name",
      selector: (r) => r.lastName + " " + r.firstName,
    },
    {
      name: "Username",
      selector: (r) => r.username,
      sortable: true,
    },
    {
      name: "Email",
      selector: (r) => r.email,
    },
    {
      name: "Role",
      selector: (r) => r.userRole.name,
    },
    {
      name: "Active",
      selector: (r) => String(r.active),
      sortable: true,
    },
    {
      name: "",
      button: true,
      cell: () => <Button variant="primary">Change</Button>,
    },
    {
      name: "",
      button: true,
      cell: () => <Button variant="success">Delete</Button>,
    },
  ];

  createTheme(
    "solarized",
    {
      text: {
        primary: "#fff",
        secondary: "#2aa198",
      },
      background: {
        default: "#002b36",
      },
      context: {
        background: "#cb4b16",
        text: "#FFFFFF",
      },
      divider: {
        default: "#2aa198",
      },
      action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
      },
    },
    "dark"
  );

  return (
    <>
      <main className="main-container">
        <div className="d-flex">
          <form class="d-flex" action="#">
            <div class="input-group my-3 my-lg-0">
              <input
                type="text"
                class="form-control"
                name="kw"
                placeholder="Search..."
                aria-label="Search"
                onChange={handleFilter}
              />
            </div>
          </form> 
        </div>
        <div className="mt-2">
          <DataTable
            columns={columns}
            data={records}
            fixedHeader
            pagination
            theme="solarized"
          ></DataTable>
        </div>
      </main>
    </>
  );
};

export default UserAdmin;
