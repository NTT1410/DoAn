import React, { createContext, useReducer } from "react";
<<<<<<< HEAD
import { BrowserRouter, Link, Navigate } from "react-router-dom";
=======
import { BrowserRouter, Navigate } from "react-router-dom";
>>>>>>> 9e0dd0a63b946dd63b38c237d0868a7ba539bb0b
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MyUserReducer from "./reducers/MyUserReducer";
import cookie from "react-cookies";
import Normal from "./NormalApp";
import AdminApp from "./AdminApp";

export const MyUserContext = createContext();

const App = () => {
  const [user, dispatch] = useReducer(
    MyUserReducer,
    cookie.load("user") || null
  );

  return (
    <>
      <MyUserContext.Provider value={[user, dispatch]}>
        <BrowserRouter>
          {user === null ? (
            <Normal />
          ) : user.userRole.id === 1 ? (
            <>
              <AdminApp />
<<<<<<< HEAD
               <Navigate to="/" />;
              
=======
              {/* <Navigate to="/" /> */}
>>>>>>> 9e0dd0a63b946dd63b38c237d0868a7ba539bb0b
            </>
          ) : (
            <Normal />
          )}
        </BrowserRouter>
      </MyUserContext.Provider>
    </>
  );
};

export default App;
