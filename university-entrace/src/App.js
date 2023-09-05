import React, { createContext, useReducer } from "react";
import Header from "./parts/Header";
import Footer from "./parts/Footer";
import NavbarRouter from "./routers/NavbarRouter";
import { BrowserRouter } from "react-router-dom";
import {} from "./assets/styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MyUserReducer from "./reducers/MyUserReducer";
import cookie from "react-cookies";
import HomeAdmin from "./pages/admin/HomeAdmin";

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
          {/* {user.userRole.id !== 1 ? ( */}

            <>
              <Header />
              <div id="content">
                <NavbarRouter />
              </div>
              <Footer />
            </>

          {/* ) : (
            <>
              <HomeAdmin />
            </>
          )} */}
        </BrowserRouter>
      </MyUserContext.Provider>
    </>
  );
};

export default App;
