import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

function CommonBar() {
  const navigate = useNavigate();
  function Logout(){
    localStorage.setItem('loggedIn', 'false')
    navigate('/');
  }
  function viewProfile(event){
    navigate('/profile/view');
    event.preventDefault();
  }
  
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="">
          Grade Mate
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="">
                Home
              </a>
            </li>
            <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">About Me</a>
                  <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="">
                        <button type="submit" onClick={viewProfile}>Profile</button>
                      </a></li>
                      <li><a class="dropdown-item" href="">
                       <button type="submit">Past Tests Taken</button>
                      </a></li>
                      <li><a class="dropdown-item" href="">
                        <button type="submit">View Past Questions</button>
                      </a></li>
                  </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                <button type="submit"className="logout" onClick={Logout}>Logout</button>
              </a>
            </li>
            <Outlet/>
          </ul>
        </div>
      </nav>
    </div>
  );
  }
export default CommonBar