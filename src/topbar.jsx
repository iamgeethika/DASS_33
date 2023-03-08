import React from "react";

function TopBar() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="">
            <i class="fa-regular fa-hexagon-minus"></i>
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
              {/* <li className="nav-item">
                <a className="nav-link" href="">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Register
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Why This App!!
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
export default TopBar