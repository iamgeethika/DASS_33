import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import ReactDOM from "react-dom";
import TopBar from "./topbar";
import Login from "./login";
import Register from "./register";
import App from "./App";
import CommonBar from "./commonNav";
import { useNavigate } from "react-router-dom";

function Prof(){
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('loggedIn')==='false'){navigate('/')}
      })
    return(
        <div>
            <CommonBar/>
            <center>
                <h3 className="head_on_profile">Profile</h3>
                <form>
                    <table>
                        <tr>
                            <td>First Name:</td>
                            <td><input type="text" placeholder="First Name" className="inputbox_profile" value={"Sai Asrith"}></input></td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                            <td><input type="text" placeholder="last Name" className="inputbox_profile"  value={"Devisetti"}></input></td>
                        </tr>
                        <tr>
                            <td>User Name:</td>
                            <td><input type="text" placeholder="User Name" className="inputbox_profile" value={"Asrith_2003"}></input></td>
                        </tr>
                        <tr>
                            <td>Age:</td>
                            <td><input type="number" placeholder="Age" className="inputbox_profile" value={"19"}></input></td>
                        </tr>
                        <tr>
                            <td>Phone Number:</td>
                            <td><input type="number" placeholder="Phone Number" className="inputbox_profile" value={"8074808391"}></input></td>
                        </tr>
                        <tr>
                            <td>Email ID:</td>
                            <td><input type="email" placeholder="Email ID" className="inputbox_profile" value={"d.s.asrith2003@gmail.com"}></input></td>
                        </tr>
                    </table>
                </form>
            </center>
        </div>
    );
}

export default Prof