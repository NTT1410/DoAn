import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyUserContext } from "../../App";

function NavAdmin({ OpenSidebar }) {
  const [user, dispatch] = useContext(MyUserContext);

  const logout = () => {
    dispatch({
      type: "logout",
    });
  };
  return (
    <header className="header">
      <div className="menu-icon">
        <i class="icon fas fa-school" onClick={OpenSidebar}></i>
      </div>
      <div className="header-left">
        <form class="d-flex ms-auto" action="#">
          <div class="input-group my-3 my-lg-0">
            <input
              type="text"
              class="form-control"
              name="kw"
              placeholder="Search..."
              aria-label="Search"
            />
            <button class="btn btn-primary" type="submit" id="search">
              <i class="icon fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="header-right">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <Link
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="icon fas fa-user"></i>
            </Link>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <Link class="dropdown-item" href="#">
                  Change Password
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" onClick={logout}>
                  Logout
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavAdmin;
