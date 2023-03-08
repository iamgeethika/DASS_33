import React, { useEffect, useState } from "react";
import CommonBar from "./commonNav";
import { BrowserRouter, useNavigate } from "react-router-dom";
import Test from "./test";

function Submit(){
    // useEffect(() => {
    //   if(localStorage.getItem('loggedIn')==='true'){navigate('/profile')}
    // })
    const [back, setback] = useState(0);

    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('loggedIn')==='false'){navigate('/')}
    })
    function Back(){
        setback(1);
      }
    return(
        <div>
            <CommonBar/>
            <div className="box">
                <center>
                    <h2>Submit your file here</h2><br/>
                    <input type='file' accept="audio/*" placeholder="" class="profile-aud"></input><br/><br/>
                    <button type="submit" class="btn btn-outline-dark btn entry-button">Submit</button> {/*add onclick that suffices the backend*/}
                    <button type="submit" class="btn btn-outline-dark btn entry-button" onClick={Back}>Back</button>
                    {back ? navigate('/test') : console.log(1)}
                </center>
            </div>
        </div>
    );
}

export default Submit