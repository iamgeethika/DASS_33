import React, { useEffect, useState } from "react";
import CommonBar from "./commonNav";
import { BrowserRouter, useNavigate } from "react-router-dom";
import Test from "./test";

function Profile(){
    const [test, settest] = useState(0);
    useEffect(() => {
      if(localStorage.getItem('loggedIn')==='true'){navigate('/test')}
    })

    function taketest(){
      settest(1);
    }
    
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('loggedIn')==='false'){navigate('/')}
    })
    return(
        <div>
            <CommonBar/>
            <div className="box">
                <center>
                <h2 className="Heading1">A friendly tool for managing and grading student assessments.</h2>
                <button type="submit" class="btn btn-outline-dark btn-lg entry-button" className="taketestbut" onClick={taketest}>Take Test</button>
                {test ? navigate('/test') : console.log(1)}
                </center>
            </div>
        </div>
    );
}

export default Profile