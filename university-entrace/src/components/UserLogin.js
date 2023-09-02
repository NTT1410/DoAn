import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyUserContext } from "../App";
import { Button } from "react-bootstrap";
<<<<<<< HEAD



const UserLogin = () => {

=======

const UserLogin = () => {
>>>>>>> aba3c8f88275a7deb23387d2e6004dc55f076d19
  const [user, dispatch] = useContext(MyUserContext);

  const logout = () => {
    dispatch({
<<<<<<< HEAD
      "type": "logout"
    })
  }


=======
      type: "logout",
    });
  };
>>>>>>> aba3c8f88275a7deb23387d2e6004dc55f076d19

  // if (user !== null) {
  //   let next = q.get("next") || "/";
  //   return <Navigate to={next} />
  // }

  return (
    <>
      {/* <div>
        {user === null ? <Link to="/login2">Đăng nhập</Link> :<>
          <Link to="/">Chao</Link>
          <Button> Đăng xuất</Button>

        </>}
        </div> */}

<<<<<<< HEAD

      <Link to="/login2">

        {user === null ? <i class="fas fa-sign-in"></i> : <>
          <i class="fas fa-sign-out-alt" onClick={logout}> Chao {user.username}</i>


        </>}
      </Link>
=======
      {/* <Link to="/login3">

        {user === null ? <i class="fas fa-sign-in"></i> : <>
          <i class="fas fa-sign-out-alt" onClick={logout} to ="/" > Chao {user.username}</i>


        </>}
      </Link> */}

      {user === null ? (
        <>
          <Link to="/Login">
            <i class="fas fa-sign-in">Log in</i>
          </Link>
        </>
      ) : (
        <>
          <Link to="/">
            <i class="fas fa-sign-out-alt" onClick={logout}>
              {" "}
              Hello {user.username}
            </i>
          </Link>
        </>
      )}
>>>>>>> aba3c8f88275a7deb23387d2e6004dc55f076d19
    </>
  );
};

export default UserLogin;
