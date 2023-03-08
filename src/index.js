import React from "react";
import ReactDOM from "react-dom";
import TopBar from "./topbar";
import Login from "./login";
import Register from "./register";
import App from "./App";
import CommonBar from "./commonNav";
import Init from "./init";
import { BrowserRouter, useNavigate } from "react-router-dom";

ReactDOM.render(
  <div className="Body"> 
    <BrowserRouter>
        <App/>  
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
