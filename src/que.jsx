import React, { useEffect, useState } from "react";
import CommonBar from "./commonNav";
import { BrowserRouter, useNavigate } from "react-router-dom";
import Test from "./test";

function Que(){
    // useEffect(() => {
    //   if(localStorage.getItem('loggedIn')==='true'){navigate('/profile')}
    // })
    const [backq, setbackq] = useState(0);

    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('loggedIn')==='false'){navigate('/')}
    })
    function Backq(){
        setbackq(1);
      }
    return(
        <div>
            <CommonBar/>
            <div className="box">
                <center>
                    <h2>Enter your question here</h2><br/>
                    <p><label for="question">Please enter the question to be posted:</label></p>
                    <center>
                    <textarea id="question" name="yourMessage" rows="5" cols="80">Question</textarea> 
                    </center><br/>                   
                    <p><label>Please enter the answer for the question to be posted:</label></p>
                    <button type="submit" class="btn btn-outline-dark btn entry-button">True</button>
                    <button type="submit" class="btn btn-outline-dark btn entry-button">False</button><br/>
                    <p><label>Cancel add request:</label></p>
                    <button type="submit" class="btn btn-outline-dark btn entry-button" onClick={Backq}>Back</button>
                    {backq ? navigate('/teacherprofile') : console.log(1)}
                </center>
            </div>
        </div>
    );
}

export default Que