import React from "react";
import {} from "../assets/styles/components/UserLogin.scss";
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <>
      <Link to="/login">
        <i class="fas fa-sign-in"></i>
      </Link>
    </>
  );
};

export default UserLogin;
