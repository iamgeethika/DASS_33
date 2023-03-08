import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import ReactDOM from "react-dom";
import TopBar from "./topbar";
import Login from "./login";
import Register from "./register";
import App from "./App";
import CommonBar from "./commonNav";
import { useNavigate } from "react-router-dom";

function Following(){
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('loggedIn')==='false'){navigate('/')}
      })
    return(
        <div>
            <CommonBar/>
            <center>
                <h3>Following</h3>
                <ul>
                    <li>Friend1</li>
                    <li>Friend2</li>
                    <li>Friend3</li>
                    <li>Friend4</li>
                </ul>
            </center>
        </div>
    );
}

export default Following