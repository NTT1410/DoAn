import React, { createContext, useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
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
            <AdminApp />
          ) : (
            <Normal />
          )}
        </BrowserRouter>
      </MyUserContext.Provider>
    </>
  );
};

export default App;
