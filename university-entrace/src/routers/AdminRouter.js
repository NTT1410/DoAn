import React from "react";
import { Route, Routes } from "react-router-dom";
import UserAdmin from "../pages/admin/UserAdmin";
import Admin from "../pages/admin/Admin";
import BannerAdmin from "../pages/admin/BannerAdmin";
import Test from "../pages/admin/Test";
import EditBanner from "../pages/admin/EditBanner";
import EditUser from "../pages/admin/EditUser";

const AdminRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="banners" element={<BannerAdmin />} />
        <Route path="banners/:bannerId" element={<EditBanner />} />
        <Route path="editbanner" element={<EditBanner />} />
        <Route path="useradmin" element={<UserAdmin />} />
        <Route path="edituser" element={<EditUser />} />
        <Route path="useradmin/:userId" element={<EditUser />} />
        <Route path="test" element={<Test />} />
        <Route path="editbanner" element={<EditBanner />} />
      </Routes>
    </>
  );
};

export default AdminRouter;
