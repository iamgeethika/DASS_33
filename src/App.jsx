import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Init from "./init";
import Veri from "./verify";
import Login from "./login";
import Profile from "./Profile";
import Register from "./register";
import View from "./view_profile";
import Followers from "./followers";
import Following from "./following";
import { BrowserRouter, useNavigate } from "react-router-dom";
import Test from "./test";
import Submit from "./submit";
import TeachProfile from "./teach_profile";
import Teach from "./teacher_init";
import Que from "./que";

function IntoProfile(){
    return(
        <div> 
            <Routes>
                <Route path='/' element={<Veri/>}></Route>
                <Route path='/teacher' element={<Teach/>}></Route>
                <Route path='/student' element={<Init/>}></Route>
                <Route path='/test' element={<Test/>}></Route>
                <Route path='/submit' element={<Submit/>}></Route>
                <Route path='/teacherprofile' element={<TeachProfile/>}></Route>
                <Route path='/que' element={<Que/>}></Route>

                <Route path='/profile' element={<Profile/>}></Route>
                <Route path='/profile/view' element={<View/>}></Route>
                <Route path='/profile/followers' element={<Followers/>}></Route>
                <Route path='/profile/following' element={<Following/>}></Route> 
            </Routes>
            
            <Outlet/>
        </div>
    );
}

export default IntoProfile