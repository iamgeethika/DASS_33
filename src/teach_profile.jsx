import React, { useEffect, useState } from "react";
import CommonBar from "./commonNav";
import { BrowserRouter, useNavigate } from "react-router-dom";
import Test from "./test";

function TeachProfile(){
    const [que, setque] = useState(0);
    useEffect(() => {
      if(localStorage.getItem('loggedIn')==='true'){navigate('/que')}
    })

    function addque(){
      setque(1);
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
                <button type="submit" class="addque" onClick={addque}>Add Questions</button>
                {que ? navigate('/que') : console.log(1)}
                </center>
            </div>
        </div>
    );
}

export default TeachProfile