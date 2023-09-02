
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
<<<<<<< HEAD
import Login2 from "../pages/Login2";



=======
import AppLoginAndRegister from "../pages/Login_Register";
>>>>>>> aba3c8f88275a7deb23387d2e6004dc55f076d19

const NavbarRouter = () => {



  return (
    <>
<<<<<<< HEAD
     

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="programs" element={<Programs />} />
          <Route path="departments" element={<Departments />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="login" element={<Login />} /> */}
          <Route path="login2" element={<Login2 />} />
          <Route path="signup" element={<Signup />} />
          <Route path="useradmin" element={<UserAdmin />} />
        </Routes>


=======
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
>>>>>>> aba3c8f88275a7deb23387d2e6004dc55f076d19
    </>
  );
};

export default NavbarRouter;
