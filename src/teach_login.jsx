import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import TopBar from "./topbar";
import App from "./App"
import { useNavigate } from "react-router-dom";

function TeachLogin() {

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  function pop(){
    alert("Enter Valid Credentials!!");
  }
  function handleclick(event){
    console.log(name, pass);
    if(name === "admin"){
      if(pass==="admin"){
        navigate('/teacherprofile')
        localStorage.setItem('loggedIn', 'true')
      }else{pop()}
    }else{pop()}
    event.preventDefault();
  }

  return (
    <div className="loginbox">
      <h4>Enter your credentials</h4><br/>
      <form method="post">
        <input type="text" placeholder="User Name" className="inputbox" onChange={function(e){
          setName(e.target.value)
        }}></input><br />
        <input type="password" placeholder="Password" className="inputbox" onChange={function(e){
          setPass(e.target.value)
        }}></input><br />
        <button type="submit" name="submit" className="submitbuttons" onClick={handleclick}>
          Login
        </button>
      </form>
    </div>
  );
}

export default TeachLogin;
