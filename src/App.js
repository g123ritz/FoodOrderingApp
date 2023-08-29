import React from "react";
import Header from "./components/Header";
import { Outlet} from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import appstore from "./redux/appstore";



const AppLayout = () => {
  
  return (
    <Provider store={appstore}>
    
        <div className="app">
          <Header />
          <Outlet />
        </div>
  
    </Provider>
  );
};





export default AppLayout;
