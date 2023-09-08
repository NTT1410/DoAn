import React from "react";
import { Route, Routes } from "react-router-dom";
import UserAdmin from "../pages/admin/UserAdmin";
import Admin from "../pages/admin/Admin";
import BannerAdmin from "../pages/admin/BannerAdmin";
import Test from "../pages/admin/Test";

const AdminRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="banners" element={<BannerAdmin />} />
        <Route path="useradmin" element={<UserAdmin />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </>
  );
};

export default AdminRouter;
