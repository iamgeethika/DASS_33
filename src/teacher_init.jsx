import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import ReactDOM from "react-dom";
import TopBar from "./topbar";
import Login from "./login";
import Register from "./register";
import App from "./App";
import CommonBar from "./commonNav";
import { useNavigate } from "react-router-dom";
import TeachLog from "./teach_login";



function Teach() {
  const [Teachlog, setTeachlog] = useState(0);
  const [Teachreg, setTeachreg] = useState(0);
 
  const navigate = useNavigate();
  useEffect(() => {
    // if(!isLogged){navigate('/')}
    if(localStorage.getItem('loggedIn')==='true'){navigate('/profile')}
  })

  function Logportal(){
    setTeachlog(1);
    setTeachreg(0);
  }
  
  function Regportal(){
    setTeachlog(0);
    setTeachreg(1);
  }
  return (
    <div className="EntryPage">
      <TopBar />
      <div className="box">
        <center>
          <h2 className="Heading1">A friendly tool for managing and grading student assessments.</h2>
          <button type="submit" class="btn btn-outline-dark btn-lg entry-button" onClick={Logportal}>Login</button>
          <button type="submit" class="btn btn-outline-dark btn-lg entry-button" onClick={Regportal}>Register</button>
          {Teachlog ? <TeachLog/> : console.log(1)}
          {/* {Teachreg ? <Teachreg/> : console.log(1)} */}
        </center>
      </div>
    </div>
  );
}
export default Teach;



