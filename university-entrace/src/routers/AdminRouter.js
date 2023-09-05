import React from "react";
import { Route, Routes } from "react-router-dom";
import UserAdmin from "../pages/admin/UserAdmin";
import Admin from "../pages/admin/Admin";

const AdminRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="useradmin" element={<UserAdmin />} />
      </Routes>
    </>
  );
};

export default AdminRouter;
