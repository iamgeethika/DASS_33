import React from "react";
import TopBar from "./topbar";

function Register() {
  return (
    <div className="regbox">
      <h4>Register Here</h4><br/>
      <form className="RegisterForm" method="post">
        <input type="text" placeholder="First Name" className="inputbox" name="fname"></input><br />
        <input type="text" placeholder="last Name" className="inputbox" name="lname"></input><br />
        <input type="text" placeholder="User Name" className="inputbox" name="uname"></input><br />
        <input type="number" placeholder="Age" className="inputbox" name=""></input><br />
        <input type="number" placeholder="Phone Number" className="inputbox"></input><br />
        <input type="email" placeholder="Email ID" className="inputbox"></input><br />
        <input type="password" placeholder="Password" className="inputbox"></input><br />
        <button type="button" name="button" className="submitbuttons">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
