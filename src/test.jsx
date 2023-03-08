import React, { useEffect, useState } from "react";
import CommonBar from "./commonNav";
import { BrowserRouter, useNavigate } from "react-router-dom";

function Test(){
    const [q1, setq1] = useState(0);
    const [q2, setq2] = useState(0);
    const [q3, setq3] = useState(0);
    const [backt, setbackt] = useState(0);

    // useEffect(() => {
    //   if(localStorage.getItem('loggedIn')==='true'){navigate('/submit')}
    // })

    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('loggedIn')==='false'){navigate('/')}
    })
    function Question1(){
        setq1(1);
        setq2(0);
        setq3(0);
        setbackt(0);
    }
    function Question2(){
        setq1(0);
        setq2(1);
        setq3(0);
        setbackt(0);
    }
    function Question3(){
        setq1(0);
        setq2(0);
        setq3(1);
        setbackt(0);
    }
    function Backt(){
        setq1(0);
        setq2(0);
        setq3(0);
        setbackt(1);
    }
    return(
        <div>
            <CommonBar/>
            <div className="box">
                <center>
                    <h2>Welcome to the test, lets start</h2><br/><br/>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            View the Questions
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">
                                <button type="submit" onClick={Question1}>Sun rises in the south</button>
                            </a></li>
                            <li><a class="dropdown-item" href="#">
                                <button type="submit" onClick={Question2}>Asrith is waste fellow</button>
                            </a></li>
                            <li><a class="dropdown-item" href="#">
                                <button type="submit" onClick={Question3}>Geethika Lives in Bakul</button>
                            </a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="#">
                                <button type="submit" onClick={Backt}>End Test</button>
                            </a></li>
                                
                            {backt ? navigate('/profile') : console.log(1)}
                            {q1 ? navigate('/submit') : console.log(1)}
                            {q2 ? navigate('/submit') : console.log(1)}
                            {q3 ? navigate('/submit') : console.log(1)}
                        </ul>
                    </div>
                </center>
            </div>
        </div>
    );
}

export default Test