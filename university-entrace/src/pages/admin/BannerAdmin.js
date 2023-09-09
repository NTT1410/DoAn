import React, { useEffect, useState } from "react";
import Apis, { endpoints } from "../../configs/Apis";
import { Button, Image } from "react-bootstrap";
import DataTable, { createTheme } from "react-data-table-component";
import moment from "moment";

const BannerAdmin = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    const loadDpm = async () => {
      let e = endpoints["banners"];
      let res = await Apis.get(e);

      setBanner(res.data);
    };
    loadDpm();
  }, []);

  const columns = [
    {
      name: "Id",
      selector: (r) => r.id,
      sortable: true,
    },
    {
      name: "Title",
      selector: (r) => r.title,
      sortable: true,
    },
    {
      name: "Image",
      selector: (r) => (
        <Image className="mt-3 mb-3" fluid rounded src={r.link}></Image>
      ),
    },
    {
      name: "Created",
      selector: (r) => moment(new Date(r.createdDate)).format("DD/MM/YYYY"),
      minWidth: "200px",
      sortable: true,
    },
    {
      name: "Status",
      selector: (r) => String(r.status),
      sortable: true,
    },
    {
      name: "",
      button: true,
      cell: () => <Button variant="primary">Enabled</Button>,
    },
    {
      name: "",
      button: true,
      cell: () => <Button variant="success">Disabled</Button>,
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
    <main className="main-container">
      <div className="mt-2">
        <DataTable
          columns={columns}
          data={banner}
          fixedHeader
          pagination
          theme="solarized"
        ></DataTable>
      </div>
    </main>
  );
};

export default BannerAdmin;
