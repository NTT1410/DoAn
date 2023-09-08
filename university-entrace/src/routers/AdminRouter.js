import React from "react";
import { Route, Routes } from "react-router-dom";
import UserAdmin from "../pages/admin/UserAdmin";
import Admin from "../pages/admin/Admin";
import BannerAdmin from "../pages/admin/BannerAdmin";

const AdminRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="banners" element={<BannerAdmin />} />
        <Route path="useradmin" element={<UserAdmin />} />
      </Routes>
    </>
  );
};

export default AdminRouter;
