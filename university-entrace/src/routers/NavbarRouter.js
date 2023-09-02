import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Departments from "../pages/Departments";
import Admissions from "../pages/Admissions";
import Programs from "../pages/Programs";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import UserAdmin from "../pages/admin/UserAdmin";
import AppLoginAndRegister from "../pages/Login_Register";

const NavbarRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="programs" element={<Programs />} />
        <Route path="departments" element={<Departments />} />
        <Route path="contact" element={<Contact />} />

        <Route path="Login" element={<Login />} />

        <Route path="LoginAndRegister" element={<AppLoginAndRegister />} />
        <Route path="signup" element={<Signup />} />
        <Route path="useradmin" element={<UserAdmin />} />
      </Routes>
    </>
  );
};

export default NavbarRouter;
