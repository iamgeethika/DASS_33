import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import ReactDOM from "react-dom";
import TopBar from "./topbar";
import Login from "./login";
import Register from "./register";
import App from "./App";
import CommonBar from "./commonNav";
import { useNavigate } from "react-router-dom";
import Init from "./init";


function Veri() {
  const [log, setLog] = useState(0);
  const [reg, setReg] = useState(0);
 
  const navigate = useNavigate();
  useEffect(() => {
    // if(!isLogged){navigate('/')}
    if(localStorage.getItem('loggedIn')==='true'){navigate('/profile')}
  })

  function Logportal(){
    setLog(1);
    setReg(0);
  }
  
  function Regportal(){
    setLog(0);
    setReg(1);
  }
  return (
    <div className="EntryPage">
      <TopBar />
      <div className="box">
        <center>
          <h2 className="Heading1">A friendly tool for managing and grading student assessments.</h2>
          <button type="submit" class="btn btn-outline-dark btn-lg entry-button" onClick={Logportal}>Teacher</button>
          <button type="submit" class="btn btn-outline-dark btn-lg entry-button" onClick={Regportal}>Student</button>
          {log ? navigate('/teacher'): console.log(1)}
          {reg ? navigate('/student') : console.log(1)}
        </center>
      </div>
    </div>
  );
}
export default Veri;



