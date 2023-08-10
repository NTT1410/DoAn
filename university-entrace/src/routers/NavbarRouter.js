import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../Pages/Home";
import Admissions from "../Pages/Admissions";
import Programs from "../Pages/Programs";
import Departments from "../Pages/Admissions";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import { UserAdmin } from "../Pages/UserAdmin";

const NavbarRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="programs" element={<Programs />} />
          <Route path="departments" element={<Departments />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="useradmin" element={<UserAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default NavbarRouter;
